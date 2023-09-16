if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const routes = require('./routes');
const errorHandler = require('./middlewares/ErrorHandler');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome' });
});
app.use(routes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
module.exports = app;
