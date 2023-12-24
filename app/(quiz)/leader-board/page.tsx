"use client";

import Loading from "@/app/loading";
import Container from "@/components/ui/container";
import { useScoresQuery } from "@/redux/api/categoryApi";
import { formatDistanceToNowStrict } from "date-fns";

const LeaderBoard = () => {
  const { data, isLoading } = useScoresQuery({});

  const sortedData = data?.slice().sort((a: any, b: any) => b.score - a.score);

  console.log(sortedData);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <div className="h-full w-full flex flex-col   ">
        <h2 className="text-center text-3xl font-semibold py-5 text-[#A076CC]">
          Leader Board
        </h2>

        <div className="h-[100vh]">
          <div>
            <div className="flex justify-between items-center bg-[#A076CC] text-white font-semibold px-5 py-2 rounded-md">
              <div className="w-1/4">Name</div>
              <div className="w-1/4">Score</div>
              <div className="w-1/4">Quiz</div>
              <div className="w-1/4">Date</div>
            </div>
            {sortedData?.map((item: any, index: number) => (
              <div
                key={index}
                className="flex justify-between items-center px-5 py-2 border-b border-[#A076CC] text-[#A076CC]"
              >
                <div className="w-1/4">
                  <span className="mr-2 font-bold">{index + 1}</span>{" "}
                  {item?.user?.name}
                </div>
                <div className="w-1/4">{item.score}</div>
                <div className="w-1/4">{item?.quiz?.title}</div>
                <div className="w-1/4">
                  {formatDistanceToNowStrict(new Date(item.createdAt))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LeaderBoard;
