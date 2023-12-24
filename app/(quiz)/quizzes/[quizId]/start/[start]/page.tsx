"use client";

import Loading from "@/app/loading";
import StartQuiz from "@/components/startQuiz";
import Container from "@/components/ui/container";
import { useQuizQuery } from "@/redux/api/quizApi";

const Start = ({ params }: any) => {
  console.log(params);

  const { data, isLoading } = useQuizQuery(params.start);

  console.log(data);

  if (isLoading) return <Loading />;

  return (
    <Container>
      <StartQuiz quiz={data} />
    </Container>
  );
};

export default Start;
