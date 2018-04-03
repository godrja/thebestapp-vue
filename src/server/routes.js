import express from 'express';
import axios from 'axios';

const streamRoute = express.Router();
streamRoute.get('/', (req, res) => {
    axios.get('streams', {headers: { 'Authorization': 'Token ' + process.env.TBA_SECRET}}).then((res) => console.log(res))
});

export default {
    streams: streamRoute
}