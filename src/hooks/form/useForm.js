import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import api from '../services/requests';

async function getMovie(id, setValue) {
    try {
        const response = await api.get(`/movies/${id}`);
        setValue(response.data);
    } catch(err) {
        alert("Falha")
    }
}

const useForm = (callback) => {
    const { id } = useParams();
    const [state, setState] = useState({});
    const history = useHistory();
    
    useEffect(() => {
        if(typeof id != 'undefined'){
            getMovie(id, setState)
        }
    }, [id])

    const handleChange = (event) => {
        const values = {...state};
        values[event.target.name] = event.target.value;
        setState(values);
    }

    const handleSubmit = callback => event => {
        event.preventDefault();
        callback(state, id);
        history.push('/')
    }

    return [{state}, handleChange, handleSubmit];
}

export default useForm;