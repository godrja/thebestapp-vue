import axios from 'axios';

axios.defaults.baseURL = '/api';

export default {
    fetchPosts() {
        return axios.get('streams', {headers: { 'Authorization': 'Token f7e867d7-f54c-400f-8aa1-d1ce9e525006'}});
    }
}