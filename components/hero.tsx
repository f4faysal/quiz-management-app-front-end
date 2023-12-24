"use client";

import { useMyProfileQuery } from "@/redux/api/authApi";
import { getUserInfo } from "@/services/auth.service";
import { AvatarImage } from "@radix-ui/react-avatar";
import { CameraIcon } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Hero = () => {
  const { userId } = getUserInfo() as any;

  const { data, isLoading } = useMyProfileQuery(userId);

  console.log(data);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-12 gap-4 py-10 ">
      <div className="col-span-12  md:col-span-7 border p-24 bg-white rounded-xl shadow-md">
        <div className="flex gap-2 p-2 bg-[#F4F4F5] rounded-xl border-2 border-[#A4A4A4]  ">
          <Input
            className="shadow-inner rounded-lg focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0"
            placeholder="Enter a join code "
          />
          <Button
            onClick={() => {
              toast.success("Code join Coming soong");
            }}
            className="bg-[#A076CC] hover:bg-[#7c39c4] shadow-2xl shadow-[#432c5b]   text-white px-4 py-2 rounded-lg"
          >
            Join
          </Button>
        </div>
      </div>
      <div className="flex  md:col-span-4 border justify-center items-center px-12 bg-white rounded-xl shadow-md">
        {!userId ? (
          <div className="flex flex-col gap-2 justify-center items-center">
            <Avatar>
              <AvatarImage src="" alt="f4Faysal" />
              <AvatarFallback>fQ</AvatarFallback>
            </Avatar>
            <p className="text-sm">
              <span className="text-[#A076CC] underline cursor-pointer hover:text-[#9b68d2]">
                Sign up
              </span>
              &nbsp;
              <span className="text-sm text-gray-500">
                now to unlock your own avatar
              </span>
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-1 justify-center items-center">
            <Avatar>
              <AvatarFallback>
                <CameraIcon className="w-8 h-8 text-[#A076CC] cursor-pointer" />
              </AvatarFallback>
            </Avatar>
            <p className="text-sm mt-2">
              <span className="text-[#A076CC] font-semibold ">
                {data?.name}
              </span>
            </p>
            <div className="flex gap-2 items-center">
              <span className="text-[10px] cursor-pointer text-yellow-600">
                Edit Profile
              </span>
              <span className="text-yellow-500">●</span>
              <Link
                href="/activity"
                className="text-[10px] cursor-pointer text-yellow-600 hover:text-yellow-800"
              >
                View Activity
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
