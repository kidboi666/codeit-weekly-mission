import { ReactNode, useEffect } from "react";
import { Footer, Nav } from "@/components";
import { useAppDispatch } from "@/hooks/useApp";
import { userInfoAccess } from "@/redux/actions/auth";
import { useRouter } from "next/router";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const initFetch = async () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      await dispatch(userInfoAccess());
    } else {
      router.push("/");
    }
  };

  useEffect(() => {
    initFetch();
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
