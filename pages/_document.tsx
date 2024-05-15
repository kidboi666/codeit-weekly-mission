import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang='ko'>
      <Head>
        <link rel='stylesheet' href={"https://cdn.jsdelivr.net/npm/pretendard@2/pretendard.css"} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
