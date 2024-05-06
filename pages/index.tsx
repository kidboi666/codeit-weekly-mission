import Head from "next/head";
import Homepage from "./HomePage";
import GlobalStyle from "@/styles/Global.styled";

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Homepage />
    </>
  );
}
