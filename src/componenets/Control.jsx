import { useEffect, useState } from "react";
import useSound from "use-sound";
import play from "../assets/play.wav";
import correct from "../assets/correct.wav";
import wrong from "../assets/wrong.wav";

export default function Control({
  data,
  setStop,
  questionNumber,
  setQuestionNumber,
}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [classNames, setClassNames] = useState({}); // store classes per answer
  const [playSound] = useSound(play);
  const [correctSound] = useSound(correct);
  const [wrongSound] = useSound(wrong);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  useEffect(() => {
    playSound(); // play sound on question load
  }, [playSound]);

  const delay = (duration, callback) => {
    setTimeout(callback, duration);
  };

const handleClick = (answer) => {
  if (selectedAnswer) return;

  setSelectedAnswer(answer);

  // Mark selected answer as active
  setClassNames({ [answer.text]: "answer active" });

  // Delay before processing correctness
  delay(1000, () => {
    if (!answer.correct) {
      // Step 1: Mark wrong answer
      setClassNames((prev) => ({
        ...prev,
        [answer.text]: "answer wrong",
      }));

      // Step 2: Play wrong sound **first**
      wrongSound();

      // Step 3: After 3s, show correct highlight
      delay(3000, () => {
        const correctAnswer = question.answers.find((a) => a.correct);
        setClassNames((prev) => ({
          ...prev,
          [correctAnswer.text]: "answer correct",
        }));

        // Step 4: Wait another 3s, then stop
        delay(3000, () => {
          setStop(true);
        });
      });

    } else {
      // If correct
      delay(1000, () => {
        setClassNames({ [answer.text]: "answer correct" });
        correctSound();

        delay(3000, () => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
          setClassNames({});
        });
      });
    }
  });
};
  return (
    <div className="quiz-container">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a, index) => (
          <div
            key={index}
            className={classNames[a.text] || "answer"}
            onClick={() => handleClick(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
}
