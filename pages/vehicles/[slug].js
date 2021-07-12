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
  const [pg1Res, pg2Res, pg3Res, pg4Res] = await Promise.all([
    fetch("https://swapi.dev/api/vehicles/"),
    fetch("https://swapi.dev/api/vehicles/?page=2"),
    fetch("https://swapi.dev/api/vehicles/?page=3"),
    fetch("https://swapi.dev/api/vehicles/?page=4"),
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

  // map data to an array of path objects with params (id)
  const paths = data.map((ship) => {
    return {
      params: { slug: ship.id.toString() },
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
  const [pg1Res, pg2Res, pg3Res, pg4Res] = await Promise.all([
    fetch("https://swapi.dev/api/vehicles/"),
    fetch("https://swapi.dev/api/vehicles/?page=2"),
    fetch("https://swapi.dev/api/vehicles/?page=3"),
    fetch("https://swapi.dev/api/vehicles/?page=4"),
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
    props: { vehicle: data[id] },
  };
};

const Details = ({ vehicle }) => {
  return (
    <>
      <Head>
        <title>Swapi Next | Vehicle</title>
        <meta name="keywords" content="vehicles" />
      </Head>
      <div>
        <h1>{vehicle.name}</h1>
        <p>Model - {vehicle.model}</p>
        <p>Manufacturer - {vehicle.manufacturer}</p>
        <p>Crew - {vehicle.crew}</p>
        <p>Passengers - {vehicle.passengers}</p>
        <p>Consumables - {vehicle.consumables}</p>
        <p>Vehicle Class - {vehicle.vehicle_class}</p>
      </div>
    </>
  );
};

export default Details;
