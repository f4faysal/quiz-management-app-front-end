import QuizCard from "./quizCard";

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
    <section>
      <div className="my-2">
        <h2 className="text-2xl font-bold ">{title}</h2>
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
