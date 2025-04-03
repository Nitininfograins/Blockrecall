// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

import Head from "next/head";
import Main from "../components/landing/Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          The Most Anticipated Blockchain Network - B L O C K R E C A L L
        </title>
        <link rel="canonical" href="https://b l o c k r e c a l l.io/"></link>
        <meta
          name="description"
          content="B L O C K R E C A L L is one of the best blockchain networks addresses typical blockchain issues by providing the lowest gas fees and high speeds without compromising privacy."
        ></meta>
      </Head>
      <Main />
    </>
  );
}
