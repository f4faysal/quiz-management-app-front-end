"use client";

import { useState } from "react";

const StartQuiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const quiz = {
    id: "ce7cd0f5-9f05-4765-bdae-10ff81cc99fe",
    title: "Class 1",
    isPublished: true,
    createdById: "f04f79c7-00c5-4fca-b4e5-7e76c0790012",
    categoryId: "7aa6b7e5-5b75-409c-a0bf-6f70a0de209d",
    createdAt: "2023-12-24T05:26:49.858Z",
    updatedAt: "2023-12-24T05:35:07.146Z",
    createdBy: {
      id: "f04f79c7-00c5-4fca-b4e5-7e76c0790012",
      email: "admin@gmail.com",
      name: "MD FAYSAL HOSSAIN",
      role: "admin",
      password: "$2b$12$3nuxKMxPaArRm/baejYaqul2Co/NfrP5/w4bEGI8ASobj8GAE9BOK",
      contactNumber: null,
      address: null,
      profileImg: null,
      createdAt: "2023-12-24T05:24:32.280Z",
      updatedAt: "2023-12-24T05:24:32.280Z",
    },
    category: {
      id: "7aa6b7e5-5b75-409c-a0bf-6f70a0de209d",
      name: "Education Quizzes",
    },
    questions: [
      {
        id: "a2bf7e99-7548-440f-99cb-91ee5053eeef",
        text: "HTMLfull form",
        options: [
          "Hypertext Markup Language",
          "Hypertext Mackup Language",
          "Haby Markup Language",
          "Jani na",
        ],
        answer: "Hypertext Mackup Language",
        isPublished: true,
        quizId: "ce7cd0f5-9f05-4765-bdae-10ff81cc99fe",
        createdAt: "2023-12-24T05:31:46.514Z",
        updatedAt: "2023-12-24T05:32:57.467Z",
      },
      {
        id: "eab88edb-81ce-4d2d-ad07-a328f5620893",
        text: "OKa",
        options: ["1", "2", "3", "4"],
        answer: "4",
        isPublished: true,
        quizId: "ce7cd0f5-9f05-4765-bdae-10ff81cc99fe",
        createdAt: "2023-12-24T05:33:08.456Z",
        updatedAt: "2023-12-24T05:33:34.957Z",
      },

      {
        id: "eab88edb-81ce-4d2d-ad07-a328f5620893",
        text: "OKs",
        options: ["1", "2", "3", "4"],
        answer: "4",
        isPublished: true,
        quizId: "ce7cd0f5-9f05-4765-bdae-10ff81cc99fe",
        createdAt: "2023-12-24T05:33:08.456Z",
        updatedAt: "2023-12-24T05:33:34.957Z",
      },

      {
        id: "eab88edb-81ce-4d2d-ad07-a328f5620893",
        text: "OKd",
        options: ["1", "2", "3", "4"],
        answer: "4",
        isPublished: true,
        quizId: "ce7cd0f5-9f05-4765-bdae-10ff81cc99fe",
        createdAt: "2023-12-24T05:33:08.456Z",
        updatedAt: "2023-12-24T05:33:34.957Z",
      },

      {
        id: "eab88edb-81ce-4d2d-ad07-a328f5620893",
        text: "OKfd",
        options: ["1", "2", "3", "4"],
        answer: "4",
        isPublished: true,
        quizId: "ce7cd0f5-9f05-4765-bdae-10ff81cc99fe",
        createdAt: "2023-12-24T05:33:08.456Z",
        updatedAt: "2023-12-24T05:33:34.957Z",
      },

      {
        id: "eab88edb-81ce-4d2d-ad07-a328f5620893",
        text: "OfK",
        options: ["1", "2", "3", "4"],
        answer: "4",
        isPublished: true,
        quizId: "ce7cd0f5-9f05-4765-bdae-10ff81cc99fe",
        createdAt: "2023-12-24T05:33:08.456Z",
        updatedAt: "2023-12-24T05:33:34.957Z",
      },
    ],
  };

  const { questions } = quiz;
  //   const { question, answers, correctAnswer } = questions[activeQuestion];

  const { text, options, answer } = questions[activeQuestion];

  //   Select and check answer
  const onAnswerSelected = (answers, idx) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    if (answers === answer) {
      setSelectedAnswer(true);
      console.log("true");
    } else {
      setSelectedAnswer(false);
      console.log("false");
    }
  };

  // Calculate score and increment to next question
  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };

  return (
    <div className="container">
      <h1>Quiz Page</h1>
      <div>
        <h2>
          Question: {activeQuestion + 1}
          <span>/{questions.length}</span>
        </h2>
      </div>
      <div>
        {!showResult ? (
          <div className="quiz-container">
            <h3>{questions[activeQuestion].text}</h3>
            {options.map((answer, idx) => (
              <li
                key={idx}
                onClick={() => onAnswerSelected(answer, idx)}
                className={
                  selectedAnswerIndex === idx ? "li-selected" : "li-hover"
                }
              >
                <span>{answer}</span>
              </li>
            ))}
            {checked ? (
              <button onClick={nextQuestion} className="btn">
                {activeQuestion === text.length - 1 ? "Finish" : "Next"}
              </button>
            ) : (
              <button onClick={nextQuestion} disabled className="btn-disabled">
                {" "}
                {activeQuestion === text.length - 1 ? "Finish" : "Next"}
              </button>
            )}
          </div>
        ) : (
          <div className="quiz-container">
            <h3>Results</h3>
            <h3>Overall {(result.score / 25) * 100}%</h3>
            <p>
              Total Questions: <span>{questions.length}</span>
            </p>
            <p>
              Total Score: <span>{result.score}</span>
            </p>
            <p>
              Correct Answers: <span>{result.correctAnswers}</span>
            </p>
            <p>
              Wrong Answers: <span>{result.wrongAnswers}</span>
            </p>
            <button onClick={() => window.location.reload()}>Restart</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StartQuiz;
