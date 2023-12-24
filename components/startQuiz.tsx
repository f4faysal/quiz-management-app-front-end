"use client";

import { useAddQuizScoreMutation } from "@/redux/api/categoryApi";
import { getUserInfo } from "@/services/auth.service";
import {
  BadgeDollarSign,
  CheckSquare,
  Percent,
  Quote,
  XSquare,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";

const StartQuiz = ({ quiz }: any) => {
  const { userId } = getUserInfo() as any;

  const router = useRouter();

  const [activeQuestion, setActiveQuestion] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState<string | boolean>("");
  const [checked, setChecked] = useState<Boolean>(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const [AddQuizScore] = useAddQuizScoreMutation();

  // const quiz = {
  //   id: "ce7cd0f5-9f05-4765-bdae-10ff81cc99fe",
  //   title: "Class 1",
  //   isPublished: true,
  //   createdById: "f04f79c7-00c5-4fca-b4e5-7e76c0790012",
  //   categoryId: "7aa6b7e5-5b75-409c-a0bf-6f70a0de209d",
  //   createdAt: "2023-12-24T05:26:49.858Z",
  //   updatedAt: "2023-12-24T05:35:07.146Z",
  //   createdBy: {
  //     id: "f04f79c7-00c5-4fca-b4e5-7e76c0790012",
  //     email: "admin@gmail.com",
  //     name: "MD FAYSAL HOSSAIN",
  //     role: "admin",
  //     password: "$2b$12$3nuxKMxPaArRm/baejYaqul2Co/NfrP5/w4bEGI8ASobj8GAE9BOK",
  //     contactNumber: null,
  //     address: null,
  //     profileImg: null,
  //     createdAt: "2023-12-24T05:24:32.280Z",
  //     updatedAt: "2023-12-24T05:24:32.280Z",
  //   },
  //   category: {
  //     id: "7aa6b7e5-5b75-409c-a0bf-6f70a0de209d",
  //     name: "Education Quizzes",
  //   },
  //   questions: [
  //     {
  //       id: "a2bf7e99-7548-440f-99cb-91ee5053eeef",
  //       text: "HTMLfull form",
  //       options: [
  //         "Hypertext Markup Language",
  //         "Hypertext Mackup Language",
  //         "Haby Markup Language",
  //         "Jani na",
  //       ],
  //       answer: "Hypertext Mackup Language",
  //       isPublished: true,
  //       quizId: "ce7cd0f5-9f05-4765-bdae-10ff81cc99fe",
  //       createdAt: "2023-12-24T05:31:46.514Z",
  //       updatedAt: "2023-12-24T05:32:57.467Z",
  //     },
  //     {
  //       id: "eab88edb-81ce-4d2d-ad07-a328f5620893",
  //       text: "OKa",
  //       options: ["1", "2", "3", "4"],
  //       answer: "4",
  //       isPublished: true,
  //       quizId: "ce7cd0f5-9f05-4765-bdae-10ff81cc99fe",
  //       createdAt: "2023-12-24T05:33:08.456Z",
  //       updatedAt: "2023-12-24T05:33:34.957Z",
  //     },

  //     {
  //       id: "a2bf7e99-7548-440f-99cb-91ee5053eeef",
  //       text: "HTMLfull form",
  //       options: [
  //         "Hypertext Markup Language",
  //         "Hypertext Mackup Language",
  //         "Haby Markup Language",
  //         "Jani na",
  //       ],
  //       answer: "Hypertext Mackup Language",
  //       isPublished: true,
  //       quizId: "ce7cd0f5-9f05-4765-bdae-10ff81cc99fe",
  //       createdAt: "2023-12-24T05:31:46.514Z",
  //       updatedAt: "2023-12-24T05:32:57.467Z",
  //     },
  //     {
  //       id: "eab88edb-81ce-4d2d-ad07-a328f5620893",
  //       text: "OKa",
  //       options: ["1", "2", "3", "4"],
  //       answer: "4",
  //       isPublished: true,
  //       quizId: "ce7cd0f5-9f05-4765-bdae-10ff81cc99fe",
  //       createdAt: "2023-12-24T05:33:08.456Z",
  //       updatedAt: "2023-12-24T05:33:34.957Z",
  //     },
  //     {
  //       id: "a2bf7e99-7548-440f-99cb-91ee5053eeef",
  //       text: "HTMLfull form",
  //       options: [
  //         "Hypertext Markup Language",
  //         "Hypertext Mackup Language",
  //         "Haby Markup Language",
  //         "Jani na",
  //       ],
  //       answer: "Hypertext Mackup Language",
  //       isPublished: true,
  //       quizId: "ce7cd0f5-9f05-4765-bdae-10ff81cc99fe",
  //       createdAt: "2023-12-24T05:31:46.514Z",
  //       updatedAt: "2023-12-24T05:32:57.467Z",
  //     },
  //   ],
  // };

  const { questions } = quiz;
  const { text, options, answer } = questions[activeQuestion];

  console.log(text);

  //   Select and check answer
  const onAnswerSelected = (answers: string, idx: any) => {
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
  const nextQuestion = async () => {
    if (activeQuestion === questions.length - 1) {
      const res = await AddQuizScore({
        userId,
        quizId: quiz.id,
        score: result.score.toString(),
      });

      console.log(res);
    }

    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 10,
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
    <div className="h-screen mt-5">
      <div>
        {!showResult ? (
          <div className=" ">
            <p className="text-[#af7feb] text-xl pt-5">
              # {activeQuestion + 1}
              <span>/{questions.length}</span>
            </p>
            <h3 className="text-xl pb-5 ">
              <span className="pr-3"> fQ :</span>
              <span className="font-semibold">
                {" "}
                {questions[activeQuestion].text}
              </span>
            </h3>
            {options.map((answer: any, idx: number) => (
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
              <Button
                onClick={nextQuestion}
                className="bg-[#7C39C4] hover:bg-[#7C39C4]/80 w-full"
              >
                {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
              </Button>
            ) : (
              <Button
                onClick={nextQuestion}
                disabled
                className="bg-[#7C39C4] hover:bg-[#7C39C4]/80 w-full"
              >
                {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
              </Button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col gap-2 col-span-3 p-4 text-center text-xl bg-[#7C39C4]/30 shadow-inner rounded-lg ">
              <span className="text-5xl ">🏆</span>
              Results
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-1 text-base border  text-center rounded-lg py-5">
              <span className="bg-green-200 p-2 rounded-full">
                <Percent className="" />
              </span>
              Overall {(result.score / 25) * 100}%
            </div>

            <div className="w-full flex flex-col justify-center items-center gap-1 text-base border  text-center rounded-lg py-5">
              <span className="bg-green-200 p-2 rounded-full">
                <BadgeDollarSign />
              </span>
              Total Score: <span>{result.score}</span>
            </div>

            <div className="w-full flex flex-col justify-center items-center gap-1 text-base border  text-center rounded-lg py-5">
              <span className="bg-green-200 p-2 rounded-full">
                <CheckSquare />
              </span>
              Correct Answers: <span>{result.correctAnswers}</span>
            </div>

            <div className="w-full flex flex-col justify-center items-center gap-1 text-base border  text-center rounded-lg py-5">
              <span className="bg-green-200 p-2 rounded-full">
                <XSquare />
              </span>
              Wrong Answers: <span>{result.wrongAnswers}</span>
            </div>

            <div className="w-full flex flex-col justify-center items-center gap-1 text-base border  text-center rounded-lg py-5">
              <span className="bg-green-200 p-2 rounded-full">
                <Quote />
              </span>
              Total Questions: <span>{questions.length}</span>
            </div>

            <Button
              className="col-span-3 bg-[#7C39C4] hover:bg-[#7C39C4]/80"
              onClick={() => {
                router.push("/leader-board");
              }}
            >
              Go to Leader Board
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StartQuiz;
