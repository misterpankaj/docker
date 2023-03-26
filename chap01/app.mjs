import express from 'express';

import waitFor from './helpers.mjs'

const app = express();

app.get('/', (req, res) => {
  res.send('<h2>Hi Tech Mind For you !!</h2>');
});

await waitFor();

app.listen(3000);
