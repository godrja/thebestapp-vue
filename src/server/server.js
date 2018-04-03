import express from 'express';
import path from 'path';
import axios from 'axios';

const app = express();

const ROOT_PATH = path.resolve(path.join(__dirname, '..'));

app.use('/bundle', express.static(path.join(ROOT_PATH, 'bundle')));

app.get('/', function(req, res) {
  res.sendFile(path.join(ROOT_PATH, 'src/server/static/index.html'));
});

const streamRoute = express.Router();
streamRoute.get('/', (req, res) => {
    axios.get('https://team.beekeeper.io/api/2/streams/97/posts?limit=100', {headers: { 'Authorization': 'Token ' + process.env.TBA_SECRET}})
    .then((result) => {
      res.json(result.data);
    });
});
const chatsRoute = express.Router();
chatsRoute.get('/', (req, res) => {
    axios.get('https://team.beekeeper.io/api/2/conversations?limit=100', {headers: { 'Authorization': 'Token ' + process.env.TBA_SECRET}})
    .then((result) => {
      res.json(result.data);
    });
});
app.use('/api/streams', streamRoute);
app.use('/api/conversations', chatsRoute);


app.use(function(req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  res.json(err)
});

app.listen(3000, function () {
  console.log('Listening on port 3000!')
});