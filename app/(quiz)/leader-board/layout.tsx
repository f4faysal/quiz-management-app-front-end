"use client";
import { onOpen } from "@/redux/features/modal/modalSlice";
import { getUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { userId } = getUserInfo() as { userId: string };

  const router = useRouter();

  console.log("userId", userId);

  const dispatch = useDispatch();

  if (!userId) {
    dispatch(onOpen());
    router.push("/");
  }

  return <main>{children}</main>;
};

export default Layout;
