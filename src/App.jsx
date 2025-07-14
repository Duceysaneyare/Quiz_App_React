

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
      question: "What does HTML stand for?",
      answers: [
        {
          text: "Hyperlinks and Text Markup Language",
          correct: false,
        },
        {
          text: "Hyper Text Markup Language  ",
          correct: true,
        },
        {
          text: "Home Tool Markup Language",
          correct: false,
        },
        {
          text: "Best Tool Markup Language",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Choose the correct HTML element for the largest heading?",
      answers: [
        {
          text: "<h6>",
          correct: false,
        },
        {
          text: "<h1>",
          correct: true,
        },
        {
          text: "<head>",
          correct: false,
        },
        {
          text: "<heading>",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Which input type defines a slider control?",
      answers: [
        {
          text: "slider",
          correct: false,
        },
        {
          text: "controls",
          correct: false,
        },
        {
          text: "search",
          correct: false,
        },
        {
          text: "range",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "Which method can be used to return a string in upper case letters?",
      answers: [
        {
          text: "touppercase()",
          correct: false,
        },
        {
          text: "toUpperCase()",
          correct: true,
        },
        {
          text: "tuc()",
          correct: false,
        },
        {
          text: "upperCase()",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Which operator can be used to compare two values?",
      answers: [
        {
          text: "><",
          correct: false,
        },
        {
          text: "<>",
          correct: false,
        },
        {
          text: "==",
          correct: true,
        },
        {
          text: "=",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "What does CSS stand for?",
      answers: [
        {
          text: "Cascading Style Sheet",
          correct: true,
        },
        {
          text: "Computer Style Sheets ",
          correct: false,
        },
        {
          text: "Creative Style Sheets",
          correct: false,
        },
        {
          text: "Colorful Style Sheets",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Which HTML attribute is used to define inline styles?",
      answers: [
        {
          text: "font",
          correct: false,
        },
        {
          text: "style",
          correct: true,
        },
        {
          text: "styles",
          correct: false,
        },
        {
          text: "class",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Which MySQL statement is used to select data from a database?",
      answers: [
        {
          text: "SELECT",
          correct: true,
        },
        {
          text: "OPEN",
          correct: true,
        },
        {
          text: "GET",
          correct: false,
        },
        {
          text: "EXTRACT",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Which MySQL statement is used to update data in a database?",
      answers: [
        {
          text: "UPDATE",
          correct: true,
        },
        {
          text: "INSERT",
          correct: false,
        },
        {
          text: "MODIFY",
          correct: false,
        },
        {
          text: "SAVE",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Which MySQL statement is used to delete data from a database?",
      answers: [
        {
          text: "SAVE",
          correct: false,
        },
        {
          text: "COLLAPSE",
          correct: false,
        },
        {
          text: "REMOVE",
          correct: false,
        },
        {
          text: "DELETE",
          correct: true,
        },
      ],
    },
    {
      id: 12,
      question: "What does SQL stand for?",
      answers: [
        {
          text: "Structured Query Language",
          correct: true,
        },
        {
          text: "Structured Question Language",
          correct: false,
        },
        {
          text: "Structured Control Language",
          correct: false,
        },
        {
          text: "Strong Question Language ",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Which SQL keyword is used to sort the result-set?",
      answers: [
        {
          text: "SORT BY",
          correct: false,
        },
        {
          text: "ORDER BY",
          correct: true,
        },
        {
          text: "ORDER",
          correct: false,
        },
        {
          text: "SORT",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Which SQL statement is used to create a database table called 'Customers'?",
      answers: [
        {
          text: "CREATE TABLE Customers",
          correct: true,
        },
        {
          text: "CREATE DB Customers",
          correct: false,
        },
        {
          text: "CREATE DATABASE TABLE Customers",
          correct: false,
        },
        {
          text: "CREATE DATABASE TAB Customers",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Who is making the Web standards?",
      answers: [
        {
          text: "Microsoft",
          correct: false,
        },
        {
          text: "Mozilla",
          correct: false,
        },
        {
          text: "Google",
          correct: false,
        },
        {
          text: "The World Wide Web Consortium  ",
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
                  <div className="timer">
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

