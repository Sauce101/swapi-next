import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Swapi Next | Home</title>
        <meta name="keywords" content="swapi" />
      </Head>
      <div>
        <h1 className={styles.title}>SWAPI NEXT</h1>
        <p className={styles.text}>
          This is Swapi Next, a pet program written in Next.js and a Star Wars
          API. Here you can glance at some Star Wars data that might be of
          interest to you. The Aurebesh alphabet is the written form of the Star
          Wars language, "Galactic Basic". You can take a look by pressing
          translate or C-3po depending on your screen size. In the future I may
          add to or change the contents and style of this program.
        </p>
        <p>
          This is a list display of the results I gatered from a Star Wars API
          by the name of SWAPI. There are 82 people to browse through, along
          with 36 starships, and 39 vehicles. This pet program is my first
          written using Next.js and a Star Wars API. API is the acronym for
          Application Programming Interface, which is a software intermediary
          that allows two applications to talk to each other. Each time you use
          an app like Facebook, send an instant message, or check the weather on
          your phone, you're using an API.
        </p>
        <Link href="/people">
          <a className={styles.btn}>People List</a>
        </Link>
        <Link href="/vehicles">
          <a className={styles.btn}>Vehicle List</a>
        </Link>
        <Link href="/starships">
          <a className={styles.btn}>Starship List</a>
        </Link>
      </div>
    </>
  );
}
