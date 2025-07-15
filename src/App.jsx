
// export default App;
import "./app.css";
import { useEffect, useMemo, useState } from "react";
import Control from "./componenets/Control";
import Timer from "./componenets/Timer";
import Start from "./componenets/Start";


function App() {
  const [username, setUsername] = useState(null);
  const [stop, setStop] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
     {
      id: 1,
      question: "When did the website Facebook launch?",
      answers: [
        {
          text: "A. 2004",
          correct: true,
        },
        {
          text: "B. 2005",
          correct: false,
        },
        {
          text: "C. 2006",
          correct: false,
        },
        {
          text: "D. 2007",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When was the WhatsApp website launched?",
      answers: [
        {
          text: "A. 2006",
          correct: false,
        },
        {
          text: "B. 2007",
          correct: false,
        },
        {
          text: "C. 2008",
          correct: false,
        },
        {
          text: "D. 2009",
          correct: true,
        },
      ],
    },
   
    {
      id: 3,
      question: "Choose the correct HTML element for the largest heading?",
      answers: [
        {
          text: "A. <h6>",
          correct: false,
        },
        {
          text: "B. <h1>",
          correct: true,
        },
        {
          text: "C. <head>",
          correct: false,
        },
        {
          text: "D. <heading>",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Which input type defines a slider control?",
      answers: [
        {
          text: "A. slider",
          correct: false,
        },
        {
          text: "B. controls",
          correct: false,
        },
        {
          text: "C. search",
          correct: false,
        },
        {
          text: "D. range",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "Which method can be used to return a string in upper case letters?",
      answers: [
        {
          text: "A. touppercase()",
          correct: false,
        },
        {
          text: "B. toUpperCase()",
          correct: true,
        },
        {
          text: "C. tuc()",
          correct: false,
        },
        {
          text: "D. upperCase()",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Which operator can be used to compare two values?",
      answers: [
        {
          text: "A. ><",
          correct: false,
        },
        {
          text: "B. <>",
          correct: false,
        },
        {
          text: "C. ==",
          correct: true,
        },
        {
          text: "D. =",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "What does CSS stand for?",
      answers: [
        {
          text: "A. Cascading Style Sheet",
          correct: true,
        },
        {
          text: "B. Computer Style Sheets ",
          correct: false,
        },
        {
          text: "C. Creative Style Sheets",
          correct: false,
        },
        {
          text: "D. Colorful Style Sheets",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Which HTML attribute is used to define inline styles?",
      answers: [
        {
          text: "A. font",
          correct: false,
        },
        {
          text: "B. style",
          correct: true,
        },
        {
          text: "C. styles",
          correct: false,
        },
        {
          text: "D. class",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Which MySQL statement is used to select data from a database?",
      answers: [
        {
          text: "A. SELECT",
          correct: true,
        },
        {
          text: "B. OPEN",
          correct: true,
        },
        {
          text: "C. GET",
          correct: false,
        },
        {
          text: "D. EXTRACT",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Which MySQL statement is used to update data in a database?",
      answers: [
        {
          text: "A. UPDATE",
          correct: true,
        },
        {
          text: "B. INSERT",
          correct: false,
        },
        {
          text: "C. MODIFY",
          correct: false,
        },
        {
          text: "D. SAVE",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Which MySQL statement is used to delete data from a database?",
      answers: [
        {
          text: "A. SAVE",
          correct: false,
        },
        {
          text: "B. COLLAPSE",
          correct: false,
        },
        {
          text: "C. REMOVE",
          correct: false,
        },
        {
          text: "D. DELETE",
          correct: true,
        },
      ],
    },
    {
      id: 12,
      question: "What does SQL stand for?",
      answers: [
        {
          text: "A. Structured Query Language",
          correct: true,
        },
        {
          text: "B. Structured Question Language",
          correct: false,
        },
        {
          text: "C. Structured Control Language",
          correct: false,
        },
        {
          text: "D. Strong Question Language ",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Which SQL keyword is used to sort the result-set?",
      answers: [
        {
          text: "A. SORT BY",
          correct: false,
        },
        {
          text: "B. ORDER BY",
          correct: true,
        },
        {
          text: "C. ORDER",
          correct: false,
        },
        {
          text: "D. SORT",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Which SQL statement is used to create a database table called 'Customers'?",
      answers: [
        {
          text: "A. CREATE TABLE Customers",
          correct: true,
        },
        {
          text: "B. CREATE DB Customers",
          correct: false,
        },
        {
          text: "C. CREATE DATABASE TABLE Customers",
          correct: false,
        },
        {
          text: "D. CREATE DATABASE TAB Customers",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Who makes the web standards?",
      answers: [
        {
          text: "A. Microsoft",
          correct: false,
        },
        {
          text: "B. Mozilla",
          correct: false,
        },
        {
          text: "C. Google",
          correct: false,
        },
        {
          text: "D. The World Wide Web Consortium(W3C)",
          correct: true,
        },
      ],
    },
  ];
  
  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {stop ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer2">
                    <Timer
                      setStop={setStop}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Control
                    data={data}   setStop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
          <ul className="moneyList">
                {moneyPyramid.map((m) => (
                  <li
                    key={m.id} 
                    className={
                      questionNumber === m.id
                        ? "moneyListItem active"
                        : "moneyListItem"
                    }
                  >
                    <span className="moneyListItemNumber">{m.id}</span>
                    <span className="moneyListItemAmount">{m.amount}</span>
                  </li>
                ))}
              </ul>
          </div>
        </>
      )}
    </div>
  );
}


export default App;

