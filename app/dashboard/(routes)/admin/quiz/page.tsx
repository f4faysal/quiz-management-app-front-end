"use client";

import { redirect } from "next/navigation";

import Loading from "@/app/loading";
import { useQuizzesQuery } from "@/redux/api/quizApi";
import { getUserInfo } from "@/services/auth.service";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";

const CoursesPage = () => {
  const { userId }: any = getUserInfo();
  const { data, isLoading } = useQuizzesQuery({});
  if (!userId) {
    return redirect("/");
  }

  console.log(data);

  // const courses = data?.quiz?.filter((course: any) => course.userId === userId);

  const quizzes: any = data;

  //   where: {
  //     userId,
  //   },
  //   orderBy: {
  //     createdAt: "desc",
  //   },
  // });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-6">
      <DataTable columns={columns} data={quizzes} />
    </div>
  );
};

export default CoursesPage;
