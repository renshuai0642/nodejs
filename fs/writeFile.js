const fs = require('fs');

fs.writeFile('./asset/content.txt', '你好，生活',(err) => {
  if (err) {
    console.log('错误信息是', err);
    return;
  }
  console.log('写入成功');
})