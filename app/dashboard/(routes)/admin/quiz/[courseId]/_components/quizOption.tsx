"use client";

import UseModal from "@/components/reusable-ui/use-modal";
import { Button } from "@/components/ui/button";
import { useGetQuestionByIdQuery } from "@/redux/api/quizApi";
import React from "react";
import { OptionsForm } from "./question-option-form";
import { QuestionsTitleForm } from "./question-title-form";

interface QuizOptionProps {
  questionId: string;
}

const QuizOption: React.FC<QuizOptionProps> = ({ questionId }) => {
  const { data, isLoading } = useGetQuestionByIdQuery(questionId);

  if (isLoading) return <div>Loading...</div>;

  return (
    <UseModal title={data?.text} description="">
      <QuestionsTitleForm initialData={data} filedName="text" />
      <OptionsForm initialData={data} />
      <div className="grid grid-cols-2 gap-2 my-2">
        {data?.options.map((option: any, i: any) => (
          <p key={i}>{option}</p>
        ))}
      </div>
      <QuestionsTitleForm initialData={data} filedName="text" />
      <div className="my-2">
        <Button disabled>Publish</Button>
      </div>
    </UseModal>
  );
};

export default QuizOption;
