"use client";
import { useCategoriesQuery } from "@/redux/api/categoryApi";
import { CategoryForm } from "./category-form";
import Loading from "@/app/loading";

const Category = ({ quiz, categories }: { quiz: any; categories: any }) => {
  const { data, isLoading } = useCategoriesQuery({});

  const options = data?.map((category: { name: any; id: any }) => ({
    label: category?.name,
    value: category?.id,
  }));


  if (isLoading) {
    return  <Loading/>
  }

  return (
    <CategoryForm initialData={quiz} courseId={categories} options={options} />
  );
};

export default Category;
