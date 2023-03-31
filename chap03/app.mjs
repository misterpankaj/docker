import express from 'express';
import fs from 'fs';
const app = express();

app.get('/api/data', (req, res) => {
  const keyvalue = req.query.param1;
  const file = req.query.param2;

  console.log('Query params1 keyvalue:', keyvalue);
  console.log('Query params2 filename:', file);

  app.use('/test', express.static('test'));
  app.use('/perm', express.static('perm'));
  

  const folder1 = 'test';
  const folder2 = 'perm';
  const fileName = file+".txt"


  if (keyvalue === 'test') {
    fs.writeFile(`${folder1}/${fileName}`, 'I saved in test folder and file: file name :: '+fileName, (err) => {
      if (err) throw err;
      console.log(`${folder1}/${fileName} has been created in ${folder1}`);
    });
  } else if (keyvalue === 'perm') {
    fs.writeFile(`${folder2}/${fileName}`, 'I saved in perm folder and file: file name :: '+fileName, (err) => {
      if (err) throw err;
      console.log(`${folder2}/${fileName} has been created in 1111${folder2}`);
    });
  } else {
    console.log(`Invalid variable name: ${variableName}`);
  }

  res.send('Response data 88');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
