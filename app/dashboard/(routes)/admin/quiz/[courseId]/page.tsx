"use client";
import { LayoutDashboard, ListChecks } from "lucide-react";

import { Banner } from "@/components/banner";
import { IconBadge } from "@/components/icon-badge";
// import { db } from "@/lib/db";

// import getCategories from "@/constants/getCategories";
// import { useCourseQuery } from "@/redux/api/courseApi";
import { useCategoriesQuery } from "@/redux/api/categoryApi";
import { useQuizQuery } from "@/redux/api/quizApi";
import { getUserInfo } from "@/services/auth.service";
import { Actions } from "./_components/actions";
import { CategoryForm } from "./_components/category-form";
import { TitleForm } from "./_components/title-form";

const CourseIdPage = ({ params }: { params: { courseId: string } }) => {
  const { userId }: any = getUserInfo();
  const { data, isLoading } = useQuizQuery(params.courseId);
  const { data: categories } = useCategoriesQuery({});
  console.log(data);
  const quiz = data;

  const requiredFields = [quiz?.title, quiz?.category?.name, quiz?.questions];

  const totalFields = requiredFields?.length;
  const completedFields = requiredFields?.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;

  // const isComplete = requiredFields.every(Boolean);
  const isComplete = false;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {!quiz?.isPublished && (
        <Banner label="This quiz is unpublished. It will not be visible to the students." />
      )}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl font-medium">Quiz setup</h1>
            <span className="text-sm text-slate-700">
              Complete all fields {completionText}
            </span>
          </div>
          <Actions
            disabled={!isComplete}
            courseId={params?.courseId}
            isPublished={quiz?.isPublished}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={LayoutDashboard} />
              <h2 className="text-xl">Customize your quiz</h2>
            </div>
            <TitleForm initialData={quiz} courseId={quiz?.id} />
            <CategoryForm
              initialData={quiz}
              courseId={quiz.id}
              options={categories?.map((category) => ({
                label: category.name,
                value: category.id,
              }))}
            />
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={ListChecks} />
                <h2 className="text-xl">Quiz questions</h2>
              </div>
              {/* <ChaptersForm initialData={course} courseId={course?.id} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseIdPage;
