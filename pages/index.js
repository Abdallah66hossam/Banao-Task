import Head from "next/head";
import styles from "../styles/globals.module.scss";
import NavBar from "@/components/NavBar";
import Banner from "@/components/Banner";
import { Feed } from "@/components/Feed";

export default function Home() {
  return (
    <>
      <Head>
        <title>ATG WORLD</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://media.licdn.com/dms/image/C510BAQFO1hAAXUH7qw/company-logo_100_100/0/1575358701761?e=1693440000&v=beta&t=Hb6583J_N39LeL_iwiBseXc8d4TRbvgEfs7XpcfSR-A"
        />
      </Head>
      <main className={styles.body}>
        <NavBar />
        <Banner />
        <Feed />
      </main>
    </>
  );
}
