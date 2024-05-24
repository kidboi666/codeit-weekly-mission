import { ReactNode, useEffect } from "react";
import { Footer, Nav } from "@/src/components";
import { useAppDispatch } from "@/src/hooks/useApp";
import { userInfoAccess } from "@/src/store/actions/auth";

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
