"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Pencil } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUpdateQuizQuestionMutation } from "@/redux/api/quizApi";

interface titleFormProps {
  initialData: any;
  filedName: string;
}

const formSchema = z.object({
  text: z.string().min(1),
  answer: z.string().min(1),
});

export const QuestionsTitleForm = ({
  initialData,
  filedName,
}: titleFormProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const [UpdateQuizQuestion] = useUpdateQuizQuestionMutation();

  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData,
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("values", values);
    try {
      await UpdateQuizQuestion({ id: initialData?.id, data: values });
      toast.success("Chapter updated");
      toggleEdit();
      router.refresh();
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className=" border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        {filedName === "text" ? "Question" : "Answer"}
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              {filedName === "text" ? "Edit question" : "Edit answer"}
            </>
          )}
        </Button>
      </div>

      {!isEditing && (
        <p className="text-sm mt-2">
          {filedName === "text" ? initialData.text : initialData.answer}
        </p>
      )}

      {isEditing && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
              control={form.control}
              name={`${filedName === "text" ? "text" : "answer"}`}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder={`e.g. ${
                        filedName === "text"
                          ? "Question title"
                          : "Question answer"
                      }`}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Button disabled={!isValid || isSubmitting} type="submit">
                Save
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};