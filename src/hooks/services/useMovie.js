import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import api from './requests';

async function getMovie(id, setValue) {
    try {
        const response = await api.get(`/movies/${id}`);
        setValue(response.data);
    } catch(err) {
        alert("Falha")
    }
}

const useMovie = (callback) => {
    const [value, setValue] = useState({});
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        getMovie(id, setValue)
    }, [id])

    const handleDestroy = async () => {
        try {
            await api.delete(`/movies/${id}`);
            history.push('/');
        } catch(err) {
            console.log(err)
            alert("Falha")
        }
    }

    return [value, handleDestroy];
}

export default useMovie;