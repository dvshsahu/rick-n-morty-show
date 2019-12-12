import Axios from 'axios';

const instance = Axios.create({
    baseURL : 'https://rickandmortyapi.com/api/character/'
})

export default instance;