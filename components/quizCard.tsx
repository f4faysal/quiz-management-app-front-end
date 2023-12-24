import Image from "next/image";

interface QuizCardProps {
  categoryData: {
    title: string;
    grade: string;
    questionsCount: number;
    playsCount: number;
    color: string;
  };
}

const QuizCard = ({ categoryData }: QuizCardProps) => {
  const { title, grade, questionsCount, playsCount, color } = categoryData;

  return (
    <div className={`w-full h-48 relative rounded-lg shadow-lg `}>
      <div className={`h-[70%] overflow-hidden rounded-b-3xl rounded-lg `}>
        <Image
          className="w-full h-auto"
          src={color}
          alt="quiz"
          sizes="100vw"
          width={0}
          height={0}
        />
      </div>
      <div className="w-full flex justify-between absolute top-[60%] p-1">
        <span className="text-[8px] p-1 bg-gray-400 rounded-xl text-white">{`${questionsCount} Qs`}</span>
        <span className="text-[8px] p-1 bg-gray-400 rounded-xl text-white">{`${playsCount} plays`}</span>
      </div>
      <div className="p-2">
        <p className="text-sm ">{grade}</p>
        <h3 className="text-base ">{title}</h3>
      </div>
    </div>
  );
};

export default QuizCard;
