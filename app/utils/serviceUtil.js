import axios from 'axios';

const fetch = (endpoint, options = {}) => axios.get(endpoint, options);

export default fetch;
