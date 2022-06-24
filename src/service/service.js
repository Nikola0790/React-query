import axios from "axios";

export const getSuperHeroes = async () => {
    const results = await axios.get('http://localhost:4000/superheroes');
    return results;
};