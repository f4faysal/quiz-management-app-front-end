"use client";

import Loading from "@/app/loading";
import Container from "@/components/ui/container";
import { useQuizQuery } from "@/redux/api/quizApi";

const Start = ({ params }: any) => {
  console.log(params);

  const { data, isLoading } = useQuizQuery(params.start);

  console.log(data);

  if (isLoading) return <Loading />;

  return (
    <div className="h-screen">
      <Container>
        <h1>{data?.title}</h1>
      </Container>
    </div>
  );
};

export default Start;
