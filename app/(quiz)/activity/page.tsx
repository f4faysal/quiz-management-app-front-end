import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Container from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Hourglass, PlusSquare, TimerReset } from "lucide-react";
const ActivityPage = () => {
  return (
    <div className="h-screen -m-1">
      <Tabs defaultValue="account" className="">
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
                <TabsTrigger value="account">
                  Running&nbsp;
                  <TimerReset className="w-4 h-4" />
                </TabsTrigger>
                <TabsTrigger value="password">
                  Completed &nbsp; <Hourglass className="w-4 h-4" />
                </TabsTrigger>
                <TabsTrigger value="a">
                  Created &nbsp; <PlusSquare className="w-4 h-4" />
                </TabsTrigger>
              </TabsList>
            </div>
          </Container>
        </div>

        <div className="mt-10">
          <Container>
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>Account</CardTitle>
                  <CardDescription>
                    Make changes to your account here. Click save when you're
                    done.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue="Pedro Duarte" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" defaultValue="@peduarte" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="password">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your password here. After saving, you'll be logged
                    out.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="current">Current password</Label>
                    <Input id="current" type="password" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="new">New password</Label>
                    <Input id="new" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save password</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Container>
        </div>
      </Tabs>
    </div>
  );
};

export default ActivityPage;
