/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Button } from "./ui/button";

const QuizCatagorySection = ({ categories }: any) => {
  const router = useRouter();

  const handelQuizSelect = (id: string) => {
    router.push(`/quizzes/${id}`);
    toast.success(`Quiz selected `);
  };

  return (
    <div>
      <div className="my-2 flex justify-between">
        <h2 className="text-2xl font-bold ">Quiz Categories</h2>
        <Button
          size={"sm"}
          className="bg-[#A076CC]/50 hover:bg-[#A076CC]/70 shadow-2xl   text-[#A076CC] px-4 py-2 rounded-lg"
        >
          See more
        </Button>
      </div>

      <div className="grid grid-cols-4  md:grid-cols-12 gap-2 ">
        {categories.map((category: { name: string; id: string }) => {
          return (
            <div
              key={category.id}
              onClick={() => handelQuizSelect(category.id)}
              className="col-span-2 bg-[#7C39C4]/10 text-center py-2 rounded-lg shadow-2xl hover:bg-[#7C39C4]/20 hover:shadow-2xl transition duration-30 cursor-pointer"
            >
              {category.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuizCatagorySection;
