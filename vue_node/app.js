const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {write,read} = require('./utils.js')

const port = 3000
const app = express()


app.use(bodyParser())
app.use(cors())
// 获取数据
app.get('/',async (req,res) => {
  let data = await read('./todo.json')
  if(data) {
    res.send({
      code:200,
      message: '请求成功',
      data: data
    })
  } else {
    res.send({
      code:200,
      message: '请求成功',
      data: ({
        'todo':[],
        'done':[]
      })
    })
  }
})

// 更新数据
app.post('/update',(req,res) => {
  let data = req.body.data
  write('./todo.json',data)
  res.send({
    code:200,
    message:'更新成功'
  })
})


app.listen(port,() => {
  console.log(`服务器已经启动到本地${port}端口`);
})