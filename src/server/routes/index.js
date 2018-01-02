import express from 'express';

const index = express.Router();

/* GET home page. */
index.get('/', (req, res) => {
  console.log('users root');
  // res.send('respond with a resource');
  res.render('index', { title: 'Express' });
});

export default index;
