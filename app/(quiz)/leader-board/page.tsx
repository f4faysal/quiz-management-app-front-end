import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-2xl">
          Looks like you haven&apos;t played a class yet.
        </h1>

        <Image
          src="/activity.png"
          width={1000}
          height={1000}
          alt="logo"
          className="w-[300px] h-[300px]"
        />
        <Link href="/">
          <Button className="text-[#7C39C4]   mt-3" size="sm" variant={"link"}>
            <HomeIcon className="h-5 w-5 mr-2" />
            Go to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default page;
