import { useState, useEffect } from 'react';
import api from './requests';

async function getIndex(setValue) {
    try{
        const response = await api.get('/movies');
        setValue(response.data)
    } catch(err) {
        alert("Falha ao acessar lista de filmes")
    }
}

const useGetMovies = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getIndex(setMovies)
    }, []);
    return movies;
}

export default useGetMovies;