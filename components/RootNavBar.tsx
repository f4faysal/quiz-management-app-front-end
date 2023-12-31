"use client";

import { cn } from "@/lib/utils";
import { onOpen } from "@/redux/features/modal/modalSlice";
import { getUserInfo } from "@/services/auth.service";
import { LogIn } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import SingUp from "./auth/sing-up";
import LoginPage from "./auth/song-in";
import { MainNav } from "./main-nav";
import Profile from "./profile";
import UseModal from "./reusable-ui/use-modal";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const RootNavBar = () => {
  const { role }: any = getUserInfo();

  console.log(role);

  const dispatch = useDispatch();
  const [toggleLogin, setToggleLogin] = useState<string>("sing-in");

  return (
    <nav className="border-b lg:px-16 xl:px-20 sticky top-0 z-50 bg-white/80">
      <UseModal title="" description="">
        {toggleLogin === "sing-in" ? (
          <LoginPage setToggleLogin={setToggleLogin} />
        ) : (
          <SingUp setToggleLogin={setToggleLogin} />
        )}
      </UseModal>
      {/* <Container> */}
      <div className="flex h-16 items-center px-4">
        <Link href="/">
          {/* <Image src=" " width={100} height={100} alt="logo" /> */}
          <h1 className="text-3xl font-bold text-[#A076CC]">fQuiz</h1>
        </Link>

        <div className=" pl-6 w-72 hidden md:flex">
          <Input className="h-8 rounded-full " placeholder="Find a quiz " />
        </div>
        <div className=" hidden md:block">
          <MainNav className="mx-6" />
        </div>
        <div className="ml-auto flex items-center space-x-4">
          {role === "admin" && (
            <div className=" hidden md:block">
              <Link
                href={"/dashboard"}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[#A076CC] flex items-center justify-center gap-1 ",
                  // pathname === `/create-quiz`
                  //   ? "text-[#A076CC] dark:text-white font-bold"
                  "text-muted-foreground"
                )}
              >
                <span className="font-bold text-base">
                  <BsPlusCircle />
                </span>
                Create Quiz
              </Link>
            </div>
          )}
          {role ? (
            <Profile />
          ) : (
            // <Link href="/sign-in">
            <Button
              onClick={() => {
                dispatch(onOpen());
                setToggleLogin("sing-in");
              }}
              className="flex gap-2 text-[#A076CC]"
              size={"sm"}
              variant={"link"}
            >
              <LogIn width={18} /> Sign In
            </Button>
            // </Link>
          )}
        </div>
      </div>
      {/* </Container> */}
    </nav>
  );
};

export default RootNavBar;
