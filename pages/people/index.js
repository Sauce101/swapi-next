import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";
import Head from "next/head";

// comparer function
function GetSortOrder(prop) {
  return function (a, b) {
    if (a[prop] > b[prop]) {
      return 1;
    } else if (a[prop] < b[prop]) {
      return -1;
    }
    return 0;
  };
}

export const getStaticProps = async () => {
  const [
    pg1Res,
    pg2Res,
    pg3Res,
    pg4Res,
    pg5Res,
    pg6Res,
    pg7Res,
    pg8Res,
    pg9Res,
  ] = await Promise.all([
    fetch("https://swapi.dev/api/people/"),
    fetch("https://swapi.dev/api/people/?page=2"),
    fetch("https://swapi.dev/api/people/?page=3"),
    fetch("https://swapi.dev/api/people/?page=4"),
    fetch("https://swapi.dev/api/people/?page=5"),
    fetch("https://swapi.dev/api/people/?page=6"),
    fetch("https://swapi.dev/api/people/?page=7"),
    fetch("https://swapi.dev/api/people/?page=8"),
    fetch("https://swapi.dev/api/people/?page=9"),
  ]);
  const [pg1, pg2, pg3, pg4, pg5, pg6, pg7, pg8, pg9] = await Promise.all([
    pg1Res.json(),
    pg2Res.json(),
    pg3Res.json(),
    pg4Res.json(),
    pg5Res.json(),
    pg6Res.json(),
    pg7Res.json(),
    pg8Res.json(),
    pg9Res.json(),
  ]);

  const data = [].concat(
    pg1.results,
    pg2.results,
    pg3.results,
    pg4.results,
    pg5.results,
    pg6.results,
    pg7.results,
    pg8.results,
    pg9.results
  );

  // pass the attribute to be sorted on
  data.sort(GetSortOrder("name"));

  // add an id to each item
  data.forEach((item, i) => {
    item.id = i;
  });

  return {
    props: { people: data },
  };
};

const People = ({ people }) => {
  return (
    <>
      <Head>
        <title>Swapi Next | People</title>
        <meta name="keywords" content="people" />
      </Head>
      <div>
        <h1>All People</h1>
        {people.map((person) => (
          <Link href={"/people/" + person.id} key={person.id}>
            <a className={styles.single}>
              <h3>{person.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default People;
