"use client";

import Loading from "@/app/loading";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { useCategoryQuery } from "@/redux/api/categoryApi";
import { FolderOpen, HomeIcon } from "lucide-react";
import Link from "next/link";

const QuizPage = ({ params }: any) => {
  const { data, isLoading } = useCategoryQuery(params.quizId);

  console.log(data);

  const handelQuixStart = (id: string) => {
    window.location.href = `/quizzes/fQuiz/start/${id}`;
    console.log(id);
  };

  if (isLoading) return <Loading />;
  return (
    <div className="h-screen">
      {data?.length > 0 ? (
        <>
          <div className=" bg-[#E2D6F0] -m-1 py-3 text-center ">
            <span className="text-xl font-semibold  bg-white p-1 rounded-full">
              Quiz Category : {data[0]?.category.name}
            </span>
          </div>
          <Container>
            <div className="grid grid-cols-12 gap-2 px-2 md:px-0 mt-5 ">
              {data?.map((quiz: any) => (
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
                    className="w-full bg-[#7C39C4] hover:bg-[#7C39C4]/80"
                    size={"sm"}
                  >
                    Start Quiz
                  </Button>
                  {/* </Link> */}
                </div>
              ))}
            </div>
          </Container>
        </>
      ) : (
        <>
          <div className=" w-full h-full flex flex-col items-center justify-center">
            <FolderOpen className="h-20 w-20 p-3 " />
            <p className="text-xl font-semibold">
              Empty Quiz Category, Please add some quiz
            </p>
            <Link href="/">
              <Button
                className="text-[#7C39C4]   mt-3"
                size="sm"
                variant={"link"}
              >
                <HomeIcon className="h-5 w-5 mr-2" />
                Go to Home
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default QuizPage;
