import api from './requests'
import { useParams } from 'react-router-dom';

const useUpdate = () => {
    const { id } = useParams();
    async function updateMovie(state) {
        try{
            await api.put(`movies/${id}`, state);
            alert('FIlme criado');
        } catch(err) {
            alert('Erro');
            console.log(err);
        }
    }
    return updateMovie;
}

export default useUpdate;