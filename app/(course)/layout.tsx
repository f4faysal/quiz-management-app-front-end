import RootNavBar from "@/components/RttoNavBar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="">
        <RootNavBar />
      </div>
      <main>{children}</main>
    </div>
  );
};

export default RootLayout;
