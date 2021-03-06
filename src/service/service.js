import axios from "axios";

export const getSuperHeroes = async () => {
  const results = await axios.get("http://localhost:4000/superheroes");
  return results;
};

export const getSuperHero = async ({ queryKey }) => {
  const id = queryKey[1];
  const result = await axios.get(`http://localhost:4000/superheroes/${id}`);
  return result;
};

// For dynamic parallel queries
export const getSuperHero_2 = async (id) => {
  const result = await axios.get(`http://localhost:4000/superheroes/${id}`);
  return result;
};

export const getCars = async () => {
  const results = await axios.get("http://localhost:4000/cars");
  return results;
};

export const getUsers = async (email) => {
  const result = await axios.get(`http://localhost:4000/users/${email}`);
  return result;
};

export const getCourse = async (courseId) => {
  const result = await axios.get(`http://localhost:4000/courses/${courseId}`);
  return result;
};

export const addNewHeroReq = async (hero) => {
  const result = await axios.post(`http://localhost:4000/superheroes`, hero);
  console.log(result);
}