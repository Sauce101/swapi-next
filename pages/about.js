import Head from "next/head";
import styles from "../styles/Home.module.css";

const About = () => {
  return (
    <>
      <Head>
        <title>Swapi Next | About</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>About</h1>
        <p className={styles.text}>
          Hello there, my name is Michael Saucedo. After taking an online
          tutorial on Next.js for beginners, I wanted to find an API to practice
          with. I seached for an API from the Star Wars universe and found SWAPI
          the Star Wars API.
        </p>
        <p className={styles.text}>
          SWAPI uses Django and Django REST Framework to serve a RESTish API to
          all. The data is all formatted in JSON and also supports JSON Schema
          for programmatically understanding the attributes of each resource.
          This is all JSON data written years ago. It's an older code sir but it
          checks out.
        </p>
        <p className={styles.text}>
          The trick for me was adding an id key value pair after fetching the
          data. There are numerous helper libraries, but none in Next.js because
          of how new it is. So using what I learned from the tutorial, and
          applying my own touches I created SWAPI-NEXT. A mix of the Star Wars
          API and Next.js, thanks for reading.
        </p>
        <p className={styles.text}>
          <a href="https://swapi.dev/documentation">
            Check out their documentation to get started consuming swapi data.
          </a>
        </p>
      </div>
    </>
  );
};

export default About;
