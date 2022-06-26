import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getSuperHero } from "../service/service";

export const SingleSuperHero = () => {
  const { heroId } = useParams();

  const { isLoading, isError, data, error } = useQuery(
    ["super-hero", heroId],
    getSuperHero
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <h1>Super Hero Information</h1>
      <p>
        {data.data.name} - {data.data.alterEgo}
      </p>
    </div>
  );
};
