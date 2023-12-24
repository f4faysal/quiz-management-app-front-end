"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { BsPlusCircle, BsSmartwatch } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { PiUsersThreeDuotone } from "react-icons/pi";

import { cn } from "@/lib/utils";
import { getUserInfo } from "@/services/auth.service";
import { Trophy } from "lucide-react";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const { role }: any = getUserInfo();

  const pathname = usePathname();
  const params = useParams();

  const performer = [
    {
      href: `/`,
      label: "Home",
      active: pathname === `/`,
      icon: <IoHomeOutline />,
    },
    {
      href: `/activity`,
      label: "Activity",
      active: pathname === `/activity`,
      icon: <BsSmartwatch />,
    },

    {
      href: `/class`,
      label: "Quizzes",
      active: pathname === `/class`,
      icon: <PiUsersThreeDuotone />,
    },
    {
      href: `/leader-board`,
      label: "leader-board",
      active: pathname === `/leader-board`,
      icon: <Trophy className="w-5 h-5" />,
    },
  ];

  const instanter = [
    ...performer,
    {
      href: `/dashboard`,
      label: "Create Quiz",
      active: pathname === `/create-quiz`,
      icon: <BsPlusCircle />,
    },
  ];

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-9", className)}
      {...props}
    >
      {performer.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-[#A076CC] flex items-center justify-center gap-1 ",
            route.active
              ? "text-[#A076CC] dark:text-white font-bold"
              : "text-muted-foreground"
          )}
        >
          <span className="font-bold text-base">{route.icon}</span>
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
