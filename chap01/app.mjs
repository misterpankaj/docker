import express from 'express';

import waitFor from './helpers.mjs'

const app = express();

var count = 1

app.get('/', (req, res) => {
  res.send('<h2>Hi Tech Mind For you 444!!</h2>');
  console.log(" count value "+count)
  count = count+1
});

await waitFor();

app.listen(3000);
