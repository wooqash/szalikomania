import { NextPage } from "next";
import Head from "next/head";

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kontakt - Szalikomania</title>
        <meta
          property="og:image"
          content="https://nextjsconf-pics.vercel.app/og-image.png"
        />
        <meta
          name="twitter:image"
          content="https://nextjsconf-pics.vercel.app/og-image.png"
        />
      </Head>
      <main className="mx-auto max-w-[1960px] p-4 text-white/80">
        <h1>Kontakt</h1>
      </main>
    </>
  );
};

export default Contact;
