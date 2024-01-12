import axios from 'axios'

// Base  da URL:https://api.themoviedb.org/3/
// URL da API : https://api.themoviedb.org/3/movie/550?api_key=6ecaa9f72e72decff9747365a40f99aa

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;