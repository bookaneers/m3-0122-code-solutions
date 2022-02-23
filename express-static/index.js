var express = require('express');
var app = express();

const path = require('path');
const pathJoin = (path.join(__dirname, 'public'));
const statFiles = app.use(express.static(pathJoin));

console.log('path: ', path);
console.log('pathJoin: ', pathJoin);
console.log('statFiles: ', statFiles);

app.use('/', (req, res, next) => {
    console.log(req.method);
    res.send('hello hello');
    next();
})

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000...');
});