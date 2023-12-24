"use client";

import StartQuiz from "@/components/startQuiz";
import Container from "@/components/ui/container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useQuizzesQuery } from "@/redux/api/quizApi";
import { Hourglass, PlusSquare, TimerReset } from "lucide-react";
import { useState } from "react";
const ActivityPage = () => {
  const { data, isLoading } = useQuizzesQuery({});

  console.log(data);

  const [scores, setScores] = useState([]);

  const quiz = {
    id: "ce7cd0f5-9f05-4765-bdae-10ff81cc99fe",
    title: "Class 1",
    isPublished: true,
    createdById: "f04f79c7-00c5-4fca-b4e5-7e76c0790012",
    categoryId: "7aa6b7e5-5b75-409c-a0bf-6f70a0de209d",
    createdAt: "2023-12-24T05:26:49.858Z",
    updatedAt: "2023-12-24T05:35:07.146Z",
    createdBy: {
      id: "f04f79c7-00c5-4fca-b4e5-7e76c0790012",
      email: "admin@gmail.com",
      name: "MD FAYSAL HOSSAIN",
      role: "admin",
      password: "$2b$12$3nuxKMxPaArRm/baejYaqul2Co/NfrP5/w4bEGI8ASobj8GAE9BOK",
      contactNumber: null,
      address: null,
      profileImg: null,
      createdAt: "2023-12-24T05:24:32.280Z",
      updatedAt: "2023-12-24T05:24:32.280Z",
    },
    category: {
      id: "7aa6b7e5-5b75-409c-a0bf-6f70a0de209d",
      name: "Education Quizzes",
    },
    questions: [
      {
        id: "a2bf7e99-7548-440f-99cb-91ee5053eeef",
        text: "HTMLfull form",
        options: [
          "Hypertext Markup Language",
          "Hypertext Mackup Language",
          "Haby Markup Language",
          "Jani na",
        ],
        answer: "Hypertext Mackup Language",
        isPublished: true,
        quizId: "ce7cd0f5-9f05-4765-bdae-10ff81cc99fe",
        createdAt: "2023-12-24T05:31:46.514Z",
        updatedAt: "2023-12-24T05:32:57.467Z",
      },
      {
        id: "eab88edb-81ce-4d2d-ad07-a328f5620893",
        text: "OK",
        options: ["1", "2", "3", "4"],
        answer: "4",
        isPublished: true,
        quizId: "ce7cd0f5-9f05-4765-bdae-10ff81cc99fe",
        createdAt: "2023-12-24T05:33:08.456Z",
        updatedAt: "2023-12-24T05:33:34.957Z",
      },
    ],
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen -m-1">
      <Tabs defaultValue="completed" className="">
        <div className="h-16 bg-[#A076CC]/30 ">
          <Container>
            <div className="flex items-center gap-5 ">
              <div>
                <h1 className="text-3xl font-semibold text-[#b383e8]">
                  Activity
                </h1>
                <p className="text-sm text-[#A076CC]">See your activity here</p>
              </div>
              <TabsList className="bg-[#A076CC]/10 mt-1">
                <TabsTrigger value="running">
                  Running&nbsp;
                  <TimerReset className="w-4 h-4" />
                </TabsTrigger>
                <TabsTrigger value="completed">
                  Completed &nbsp; <Hourglass className="w-4 h-4" />
                </TabsTrigger>
                <TabsTrigger value="created">
                  Created &nbsp; <PlusSquare className="w-4 h-4" />
                </TabsTrigger>
              </TabsList>
            </div>
          </Container>
        </div>

        <div className="mt-10">
          <Container>
            <TabsContent value="running">Running</TabsContent>
            <TabsContent value="completed">completed</TabsContent>
            <TabsContent value="created">
              start quiz
              <StartQuiz />
            </TabsContent>
          </Container>
        </div>
      </Tabs>
    </div>
  );
};

export default ActivityPage;
