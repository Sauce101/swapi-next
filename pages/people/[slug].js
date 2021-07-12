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

// tell next.js how many pages there are
export const getStaticPaths = async () => {
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

  // map data to an array of path objects with params (id)
  const paths = data.map((person) => {
    return {
      params: { slug: person.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

// for each individual page: get the data for that page
export const getStaticProps = async (context) => {
  const id = context.params.slug;
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
    props: { person: data[id] },
  };
};

const Details = ({ person }) => {
  return (
    <>
      <Head>
        <title>Swapi Next | People</title>
        <meta name="keywords" content="chars2" />
      </Head>
      <div>
        <h1>{person.name}</h1>
        <p>Height - {person.height} cm</p>
        <p>Mass - {person.mass} kg</p>
        <p>Hair color - {person.hair_color}</p>
        <p>Skin color - {person.skin_color}</p>
        <p>Eye color - {person.eye_color}</p>
        <p>Birth year - {person.birth_year}</p>
        <p>Gender - {person.gender}</p>
      </div>
    </>
  );
};

export default Details;
