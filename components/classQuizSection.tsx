import QuizCard from "./quizCard";
import { Button } from "./ui/button";

interface ClassQuizSectionProps {
  categories: {
    title: string;
    grade: string;
    questionsCount: number;
    playsCount: number;
    color: string;
  }[];
  title: string;
}

const ClassQuizSection = ({ categories, title }: ClassQuizSectionProps) => {
  return (
    <section className="py-10">
      <div className="my-2 flex justify-between">
        <h2 className="text-2xl font-bold ">{title}</h2>
        <Button
          size={"sm"}
          className="bg-[#A076CC]/50 hover:bg-[#A076CC]/70 shadow-2xl   text-[#A076CC] px-4 py-2 rounded-lg"
        >
          See more
        </Button>
      </div>
      <div className="grid grid-cols-12 gap-3">
        {categories.map((item, i) => (
          <div key={i} className="col-span-2 ">
            <QuizCard categoryData={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClassQuizSection;
