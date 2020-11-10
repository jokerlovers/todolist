const fs = require('fs')

// 写入文件
function write(path,data) {
  fs.writeFile(path,JSON.stringify(data),(err,data) => {
      if (err) {return false};
      console.log('文件写入成功');
      return true
    })
}

// 读取文件
async function read(path) {
  let value;
  data = await new Promise((resolve,reject)=> {
    fs.readFile(path, 'utf8', (err,data) => {
      if(err) {console.log(err)};
      if (data) {
        value = JSON.parse(data);
        resolve(value)
      }
      else {
        value = ''
        resolve(value)
      }   
    })
  })
  value = data
  return value
}

module.exports = {
  write,
  read
}