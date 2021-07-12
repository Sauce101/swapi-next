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
  const [pg1Res, pg2Res, pg3Res, pg4Res] = await Promise.all([
    fetch("https://swapi.dev/api/starships"),
    fetch("https://swapi.dev/api/starships/?page=2"),
    fetch("https://swapi.dev/api/starships/?page=3"),
    fetch("https://swapi.dev/api/starships/?page=4"),
  ]);
  const [pg1, pg2, pg3, pg4] = await Promise.all([
    pg1Res.json(),
    pg2Res.json(),
    pg3Res.json(),
    pg4Res.json(),
  ]);

  const data = [].concat(pg1.results, pg2.results, pg3.results, pg4.results);

  // pass the attribute to be sorted on
  data.sort(GetSortOrder("name"));

  // add an id to each item
  data.forEach((item, i) => {
    item.id = i;
  });

  return {
    props: { starships: data },
  };
};

const Starships = ({ starships }) => {
  return (
    <>
      <Head>
        <title>Swapi Next | Starships</title>
        <meta name="keywords" content="starships" />
      </Head>
      <div>
        <h1>All Starships</h1>
        {starships.map((ship) => (
          <Link href={"/starships/" + ship.id} key={ship.id}>
            <a className={styles.single}>
              <h3>{ship.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Starships;
