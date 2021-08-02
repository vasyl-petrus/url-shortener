const express = require('express');
const cors = require('cors')

const app = express();
const connection = require('./config/db');
const PORT = process.env.PORT || 5000;

connection.once('open', () => console.log('DB Connected'));
connection.on('error', () => console.log('Error'));

app.use(cors())
app.use(
  express.json({
    extended: false,
  })
);
app.use('/', require('./routes/url'));

app.listen(PORT, console.log(`server started, listening PORT ${PORT}`));
