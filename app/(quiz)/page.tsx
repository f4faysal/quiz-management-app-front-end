import QuizCatagorySection from "@/components/QuizCatagorySection";
import ClassQuizSection from "@/components/classQuizSection";
import Hero from "@/components/hero";
import Container from "@/components/ui/container";
import { nodejs, reactjs } from "@/constants/global";

const page = () => {
  return (
    <div>
      <Container>
        <Hero />

        <QuizCatagorySection />

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

export default page;
