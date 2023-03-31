const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');

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

// // Connect to local MongoDB database
// mongoose.connect('mongodb://localhost/mydatabase', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch(error => console.error(error));

// // Define schema for database collection
// const DataSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   message: String,
//   date: {
//     type: Date,
//     default: Date.now,
//   },
// });

// // Create model for database collection
// const DataModel = mongoose.model('Data', DataSchema);

// // Parse JSON bodies for POST requests
// app.use(express.json());

// // Define POST endpoint for inserting data
// app.post('/data', async (req, res) => {
//   try {
//     const data = new DataModel(req.body);
//     await data.save();
//     res.send('Data saved to MongoDB');
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error saving data to MongoDB');
//   }
// });




const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
