import { useQuery } from "react-query";
import { getCars, getSuperHeroes } from "../service/service";

export const ParallelQueries = () => {
  const {
    isLoading: isLoadingHero,
    isError: isErrorHero,
    error: errorHero,
    data: heroes,
  } = useQuery("super-hero", getSuperHeroes);
  const {
    isLoading: isLoadingCars,
    isError: isErrorCars,
    error: errorCars,
    data: cars,
  } = useQuery("cars", getCars);

  if (isLoadingHero || isLoadingCars) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (isErrorHero) {
    return (
      <div>
        <p>{errorHero.message}</p>
      </div>
    );
  }

  if (isErrorCars) {
    return (
      <div>
        <p>{errorCars.message}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Parallel Queries</h1>
      <ul>
        {cars.data.map((car) => {
          return <li key={car.id}>{car.name}</li>;
        })}
      </ul>
      <ul>
        {heroes.data.map((hero) => {
          return <li key={hero.id}>{hero.name}</li>;
        })}
      </ul>
    </div>
  );
};
