import { useQueries } from "react-query";
import { getSuperHero_2 } from "../service/service";

export const DynamicParallelQueries = ({ heroIds }) => {
  const result = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => getSuperHero_2(id),
      };
    })
  );

  let newData;
  const isLoading = result.some((data) => data.isLoading);
  const isError = result.some((data) => data.isError);
  const data = result.some((data) => data.data);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error!!!</p>;
  }

  if (data) {
    newData = result.map((data) => data.data);
  }

  return (
    <div>
      <h1>DynamicParallelQueries</h1>
      <ul>
        {newData.map((name) => (
          <li key={name.data.id}>{name.data.name}</li>
        ))}
      </ul>
    </div>
  );
};
