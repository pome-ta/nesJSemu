'use strict';

const express = require('express');

// Setup
const app = express();
const port = process.env['WEB_APP_PORT'];
//const port = 3000;

//app.use(express.static(`${__dirname}/public`));
app.use(express.static(__dirname + '/public'));

// Launch app
app.listen(port, () => {
  console.log(`Launching app... http://localhost:${port}` + '\n');
  //console.log({app});
});

