const app = require('./app');
require('dotenv').config();

app.listen(process.env.API_PORT, () => {
  console.log(`Listening on API_PORT ${process.env.API_PORT}`);
});
