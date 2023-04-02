const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');
const fs = require('fs')

const app = express();

app.get('/fetchdata', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving data');
  }
});

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
    fs.writeFile(`${folder1}/${fileName}`, 'test'+file, (err) => {
      if (err) throw err;
      console.log(`${folder1}/${fileName} has been created in ${folder1}`);
    });
  } else if (keyvalue === 'perm') {
    fs.writeFile(`${folder2}/${fileName}`, 'perm'+file, (err) => {
      if (err) throw err;
      console.log(`${folder2}/${fileName} has been created in 1111${folder2}`);
    });
  } else {
    console.log(`Invalid variable name: ${variableName}`);
  }

  res.send('Response data 100');
});



// Connect to local MongoDB database
// host.docker.internal
mongoose.connect('mongodb://mongo/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(error => console.error(error));

// Define schema for database collection
const DataSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

// Create model for database collection
const DataModel = mongoose.model('Data', DataSchema);

// Parse JSON bodies for POST requests
app.use(express.json());

// Define POST endpoint for inserting data
app.post('/data', async (req, res) => {
  try {
    const data = new DataModel(req.body);
    await data.save();
    res.send('Data saved to MongoDB');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error saving data to MongoDB');
  }
});




const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
