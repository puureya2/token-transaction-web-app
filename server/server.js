const express = require('express');
const connectDB = require('./config/db.js');
const cors = require("cors");
const { NODE_ENV, MONGO_URI, SERVER_PORT } = require("./config/config.js");


const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());
app.use(cors());

// Define Routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// new contracts api
app.use("/api/technical_assessment", require("./routes/api/technical_assessment"));
console.log('contracts api successfully read')


// Serve static assets in production
if (NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
  console.log('run in production successful')
} else {
  app.get('/', (req, res) => {
  });
}


const PORT = SERVER_PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
});
