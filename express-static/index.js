var express = require('express');
var app = express();

const path = require('path');
const pathJoin = (path.join(__dirname, 'public'));
const statFiles = app.use(express.static(pathJoin));

console.log(statFiles);

app.use('/', (req, res, next) => {
  console.log(req.method);
  res.send('welcome to express-static');
  next();
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000...');
});
