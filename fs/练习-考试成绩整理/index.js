const fs = require('fs');

fs.readFile('./asset/成绩.txt', 'utf8', (err, data) => {
  if (err) {
    console.log('错误信息是', err);
    return;
  }
  const arr = data.split(' ')
  let str = '';
  arr.forEach(item => {
    str = str + item.replace(/=/, '：') + '\r\n';
  })
  fs.writeFile('./asset/成绩-ok.txt', str, err => {
    if (err) {
      console.log('错误信息是', err);
      return;
    }
    console.log('成绩转换成功');
  })
})