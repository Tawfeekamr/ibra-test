import axios from 'axios';

const API_URL = '/users.json';

export default axios.get(`${API_URL}`).then((response)=> response.data);