"use client";

import Loading from "@/app/loading";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { useQuizzesQuery } from "@/redux/api/quizApi";

const QuizzzesPage = ({ params }: any) => {
  const { data, isLoading } = useQuizzesQuery({});

  const quizzes = data;
  console.log(quizzes);
  const publishQuizzes = quizzes?.filter((quiz: any) => quiz?.isPublished);

  console.log(publishQuizzes);

  const handelQuixStart = (id: string) => {
    console.log(id);
    window.location.href = `/quizzes/fQuiz/start/${id}`;
  };

  if (isLoading) return <Loading />;
  return (
    <div className="h-screen">
      <div className=" bg-[#E2D6F0] -m-1 py-3 text-center ">
        <span className="text-lg font-semibold  bg-white px-3 py-1 rounded-full">
          All Quizzes
        </span>
      </div>
      <Container>
        <div className="grid grid-cols-12 gap-2 px-2 md:px-0 mt-5 ">
          {publishQuizzes?.map((quiz: any) => (
            <div
              key={quiz.id}
              className="col-span-2 border rounded-xl border-[#A076CC]  p-2"
            >
              <h2 className="text-base font-semibold"> {quiz?.title} </h2>

              <p>{quiz?.category?.name}</p>
              <p>
                Total questions: <span>{quiz?.questions?.length}</span>
              </p>
              <p className="text-xs">
                Publish by: <span>{quiz?.createdBy?.name}</span>
              </p>
              {/* <Link href={`/quizzes/fQuiz/start/${quiz?.id}`}> */}
              <Button
                onClick={() => handelQuixStart(quiz.id)}
                className="w-full bg-[#7C39C4] hover:bg-[#7C39C4]/80 "
                size={"sm"}
              >
                Start Quiz
              </Button>
              {/* </Link> */}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default QuizzzesPage;
