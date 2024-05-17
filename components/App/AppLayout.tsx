import { ReactNode } from "react";
import Nav from "@/components/Nav/Nav";
import Footer from "../Footer/Footer";

interface AppProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppProps) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
