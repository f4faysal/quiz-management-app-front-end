"use client";

import UseModal from "@/components/reusable-ui/use-modal";
import React from "react";

interface QuizOptionProps {
  editId: string;
}

const QuizOption: React.FC<QuizOptionProps> = ({ editId }) => {
  return (
    <UseModal title="Add question option" description="">
      {editId}
    </UseModal>
  );
};

export default QuizOption;
