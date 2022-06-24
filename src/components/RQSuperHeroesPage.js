import { useQuery } from "react-query";
import { getSuperHeroes } from "../service/service";

export const RQSuperHeroesPage = () => {

  const {isLoading, isError, data, error} = useQuery('superHeroes', getSuperHeroes);

  if (isLoading) {
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
        {data.data.map(superHero => {
          return (
            <li key={superHero.id}>{superHero.name}</li>
          )
        })}
      </ul>
    </div> 
  )
};