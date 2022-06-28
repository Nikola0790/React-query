import { useQuery } from "react-query";
import { getUsers, getCourse } from "../service/service";

export const DependentQueries = ({ email }) => {
  const {
    data: user,
    isLoading: userIsLoading,
    isError: userIsError,
    error: userError,
  } = useQuery(["user", email], () => getUsers(email));

  const courseId = user?.data.courseId;

  const {
    data: course,
    isLoading: courseIsLoading,
    isError: courseIsError,
    error: courseError,
  } = useQuery(["course", courseId], () => getCourse(courseId), {
    enabled: !!courseId,
  });

  if (userIsLoading || courseIsLoading) {
    return <p>Loading...</p>;
  }

  if (userIsError) {
    return <p>{userError.message}</p>;
  }

  if (courseIsError) {
    return <p>{courseError.message}</p>;
  }

  return (
    <div>
      <h1>DependentQueries</h1>
      <h2>Courses:</h2>
      <ul>
        {course.data.coursesType.map((course, index) => {
          return <li key={index}>{course}</li>;
        })}
      </ul>
    </div>
  );
};
