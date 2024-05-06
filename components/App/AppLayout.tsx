import { ReactNode } from "react";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";

interface AppProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppProps> = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
