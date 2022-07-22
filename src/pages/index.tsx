import Head from "next/head";
import Footer from "../components/footer/footer";
import Main from "../components/main/main";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ronnel Babailan</title>
      </Head>

      <div className={styles.container}>
        <div className={styles.bold}>RB</div>
        <Main />
        <Footer />
      </div>
    </>
  );
}
