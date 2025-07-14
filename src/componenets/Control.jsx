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

  // Step 1: mark selected answer as active
  setClassNames({ [answer.text]: "answer active" });

  // Step 2: wait 1s → show wrong answer style if incorrect
  delay(1000, () => {
    if (!answer.correct) {
      setClassNames((prev) => ({
        ...prev,
        [answer.text]: "answer wrong",
      }));

      // Step 3: wait 800ms → reveal the correct answer
      delay(3000, () => {
        const correctAnswer = question.answers.find((a) => a.correct);
        setClassNames((prev) => ({
          ...prev,
          [correctAnswer.text]: "answer correct",
        }));

        wrongSound(); // play wrong sound

        // Step 4: wait 3s then stop
        delay(3000, () => {
          setStop(true);
        });
      });

    } else {
      // If correct
      setClassNames({ [answer.text]: "answer correct" });
      correctSound();

      // Step 4: proceed to next question
      delay(3000, () => {
        setQuestionNumber((prev) => prev + 1);
        setSelectedAnswer(null);
        setClassNames({});
      });
    }
  });
};


  return (
    <div className="trivia">
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
