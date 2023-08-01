import axios from 'axios';

{/* Creamos una instancia de axios para las consultas al api, que incluye el url 
    y la cabecera con los parámetros del api-key */}

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '2491c9725b071ac402e19a634f7a27ce',
        language: 'es-ES'
    }
});

export default movieDB;


