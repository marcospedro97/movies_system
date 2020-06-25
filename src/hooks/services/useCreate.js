import api from './requests'

const useCreate = () => {
    async function movieCreate(state) {
        try{
            await api.post('movies', state);
            alert('FIlme criado');
        } catch(err) {
            alert('Erro');
            console.log(err);
        }
    }
    return movieCreate;
}

export default useCreate;