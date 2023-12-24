"use client";

import { LogOut, Settings } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authKey } from "@/constants/storageKey";
import { useParams } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { Avatar, AvatarFallback } from "./ui/avatar";

const Profile = () => {
  // const dispatch = useDispatch();
  // const { data, isLoading } = useMyProfileQuery({});

  // const user = useSelector((state: any) => state.user.profile);

  // useEffect(() => {
  //   dispatch(setProfile(data));
  // }, [data, dispatch]);

  const params = useParams();

  const handelLogOut = () => {
    localStorage.removeItem(authKey);
    window.location.href = "/";
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarFallback>
              <GiHamburgerMenu className="h-6 w-6" />
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56 mx-2">
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>

          <DropdownMenuItem onClick={handelLogOut}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Profile;
