const assert = require('assert')
const fs = require('fs')
const zlib = require('zlib')

/**
 * 
 */
describe('stream', () => {
  const ws = fs.createWriteStream('./test2.txt')
  for (let i = 0; i < 500; i++) {
    ws.write(Buffer.from(`${i},\n`))
  }

  const rs = fs.createReadStream('./test2.txt')
  const zs = zlib.createGzip()
  const ws2 = fs.createWriteStream('./test3.txt')

  it('只读流，只监听了 readable 事件， readableFlowing === null', () => {
    rs.on('readable', () => {
      assert.equal(true, rs.readableFlowing === null)
    })
  })

  it('只读流，只监听了 readable 事件， readableFlowing === null', () => {
    rs.read(10)
    rs.on('readable', () => {
      assert.equal(true, rs.readableFlowing === null)
    })
  })

  it('只读流，监听了 readable 和 data 事件， readableFlowing === null', () => {
    rs.pipe(zs).pipe(ws2)

    rs.on('end', chunk => {
      assert.equal(true, rs.readableFlowing === null)
    })
  })

  // it('fs.createWriteStream', ()=>{
  //   rs.pipe(zs).pipe(ws2)

  //   ws2.on('end',(chunk)=>{
  //     assert.equal(true, rs.read()===null && zs.read() === null)
  //   })
  // })
})
