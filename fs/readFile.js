const fs = require('fs');

fs.readFile('./asset/number.txt', (err, data) => {
  if (err) {
    console.log('报错信息', err);
    return;
  } 
  console.log('读取到的信息是', data);
})