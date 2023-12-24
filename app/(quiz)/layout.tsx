import Footer from "@/components/Footer";
import RootNavBar from "@/components/rootNavBar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <RootNavBar />
      <main className="p-1">{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
