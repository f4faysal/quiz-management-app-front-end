"use client";

import QuizCatagorySection from "@/components/QuizCatagorySection";
import ClassQuizSection from "@/components/classQuizSection";
import Hero from "@/components/hero";
import Container from "@/components/ui/container";
import { nodejs, reactjs } from "@/constants/global";
import { useCategoriesQuery } from "@/redux/api/categoryApi";
import Loading from "../loading";

const Page = () => {
  const { data, isLoading } = useCategoriesQuery({});

  if (isLoading) return <Loading />;

  return (
    <div>
      <Container>
        <Hero />
        <QuizCatagorySection categories={data} />
        <ClassQuizSection categories={nodejs} title="Mathematics" />
        <ClassQuizSection
          categories={reactjs}
          title="English and Language Arts"
        />
        <ClassQuizSection categories={nodejs} title="Social Studies" />
        <ClassQuizSection categories={reactjs} title="World Languages" />
      </Container>
    </div>
  );
};

export default Page;
