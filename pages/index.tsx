import Head from "next/head";
import { Inter } from "next/font/google";
import Home from "@/components/Home";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Creath" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}
