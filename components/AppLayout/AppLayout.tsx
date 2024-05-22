import { ReactNode, useEffect } from "react";
import { Footer, Nav } from "@/components";
import { useAppDispatch } from "@/hooks/useApp";
import { userInfoAccess } from "@/redux/actions/auth";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) dispatch(userInfoAccess());
  }, []);

  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
