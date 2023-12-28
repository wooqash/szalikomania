import { Metadata, NextPage } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Łódzkie - Polskie kluby",
  description: "",
};

const LodzVoivodeshipClubs: NextPage = () => {
  return (
    <>
      <Head>
        <title>Łódzkie - Polskie kluby - Szalikomania</title>
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
        <h1>Łódzkie</h1>
      </main>
    </>
  );
};

export default LodzVoivodeshipClubs;
