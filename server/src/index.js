const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

app.use(helmet());
app.use(morgan('dev'));

const PORT = process.env.PORT || 8594;

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
