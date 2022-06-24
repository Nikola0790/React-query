import { useQuery } from "react-query";
import { getSuperHeroes } from "../service/service";

export const RQSuperHeroesPage = () => {

  // enabled: boolean - Set this to false to disable this query from automatically running.
  // refetch: A function to manually refetch the query.
  const {isLoading, isError, data, error, refetch, isFetching} = useQuery('superHeroes', getSuperHeroes, { enabled: false, });

  if (isLoading || isFetching) {
    return  <p>Loading...</p>
  }

  if (isError) {
    return <p>{error.message}</p>
  }

  return (
    <div>
      <h1>React Query Super Heroes Page</h1>
      <h2>Super Heroes List</h2>
      <ul>
        {data?.data.map(superHero => {
          return (
            <li key={superHero.id}>{superHero.name}</li>
          )
        })}
      </ul>
      <button onClick={refetch}>Get Heroes</button>
    </div> 
  )
};