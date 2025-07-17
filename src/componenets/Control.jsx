import { useEffect, useState } from "react";
import useSound from "use-sound";
import play from "../assets/play.wav";
import correct from "../assets/correct.wav";
import wrong from "../assets/wrong.wav";
import clap from "../assets/clap.wav";

export default function Control({
  data,
  setStop,
  setWonAll,
  questionNumber,
  setQuestionNumber,
}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [classNames, setClassNames] = useState({});
  const [playSound] = useSound(play);
  const [correctSound] = useSound(correct);
  const [wrongSound] = useSound(wrong);
  const [clapSound] = useSound(clap);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  useEffect(() => {
    playSound();
  }, [playSound]);

  const delay = (duration, callback) => {
    setTimeout(callback, duration);
  };

  const handleClick = (answer) => {
    if (selectedAnswer) return;

    setSelectedAnswer(answer);
    setClassNames({ [answer.text]: "answer active" });

    delay(1000, () => {
      if (!answer.correct) {
        setClassNames((prev) => ({
          ...prev,
          [answer.text]: "answer wrong",
        }));
        wrongSound();

        delay(3000, () => {
          const correctAnswer = question.answers.find((a) => a.correct);
          setClassNames((prev) => ({
            ...prev,
            [correctAnswer.text]: "answer correct",
          }));
          delay(3000, () => {
            setStop(true);
          });
        });
      } else {
        delay(1000, () => {
          setClassNames({ [answer.text]: "answer correct" });
          correctSound();

          delay(3000, () => {
            if (questionNumber === data.length) {
              clapSound();
              setWonAll(true);
              delay(2000, () => {
                setStop(true);
              });
            } else {
              setQuestionNumber((prev) => prev + 1);
              setSelectedAnswer(null);
              setClassNames({});
            }
          });
        });
      }
    });
  };

  return (
    <>
      <div className="progress-indicator">
        Question {questionNumber} of {data.length}
      </div>

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
    </>
  );
}
