import Script from "next/script";
import AppLayout from "@/components/App/AppLayout";
import LandingPage from "./landingPage";
// import SignIn from "./signin";

const Home = () => {
  return (
    <>
      <Script
        src='https://t1.kakaocdn.net/kakao_js_sdk/2.7.1/kakao.min.js'
        integrity='sha384-kDljxUXHaJ9xAb2AzRd59KxjrFjzHa5TAoFQ6GbYTCAG0bjM55XohjjDT7tDDC01'
        crossOrigin='anonymous'
      />
      <AppLayout>
        <LandingPage />
      </AppLayout>
    </>
  );
};

export default Home;
