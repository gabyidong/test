const http = require('http')

const server = http.createServer((req, res) => {
  res.write(JSON.stringify(req.headers))
  res.write('\n\r')
  res.write(JSON.stringify(req.rawHeaders))
  res.write('\n\r')
  res.write(req.url)
  res.end()
})

server.listen(3000)