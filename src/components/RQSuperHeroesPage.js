import { useState } from "react";
import { useQuery, useMutation } from "react-query";
import { Link } from "react-router-dom";
import { getSuperHeroes, addNewHeroReq } from "../service/service";

export const RQSuperHeroesPage = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");

  // enabled: boolean - Set this to false to disable this query from automatically running.
  // refetch: A function to manually refetch the query.
  // select - use for Data Transformation
  const { isLoading, isError, data, error, refetch, isFetching } = useQuery(
    "superHeroes",
    getSuperHeroes,
    {
      enabled: false,
      /*  select: (data) => {
        return data.data.map((hero) => hero.name);
      }, */
    }
  );

  // ***************

  const addNewHero = (name, alterEgo) => {
    const hero = {name, alterEgo};
    mutate(hero);
  }

  const { mutate } = useMutation(addNewHeroReq);

  console.log("isFetching",isFetching)
  console.log("isLoading",isLoading)

  if (isFetching) {
    /* return <p>Loading...</p>; */
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <h1>React Query Super Heroes Page</h1>
      <div>
        <input type="text" placeholder="Enter hero name" value={name} onChange={(e) => setName(e.target.value)}></input>
        <input type="text" placeholder="Enter hero alter ego" value={alterEgo} onChange={(e) => setAlterEgo(e.target.value)}></input>
        <button onClick={() => addNewHero(name, alterEgo)}>Add Hero</button>
      </div>
      <h2>Super Heroes List</h2>
      <ul>
        {data?.data.map((superHero) => {
          return (
            <li key={superHero.id}>
              <Link to={`/rq-super-hero/${superHero.id}`}>
                {superHero.name}
              </Link>
            </li>
          );
        })}
        {/*  {data?.map((superHeroName, index) => {
          return <li key={index}>{superHeroName}</li>;
        })} */}
      </ul>
      <button onClick={refetch}>Get Heroes</button>
    </div>
  );
};
