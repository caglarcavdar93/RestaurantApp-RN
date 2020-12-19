import axios from 'axios';
let apiKey='api key from yelp';
export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer '+apiKey
    }
});