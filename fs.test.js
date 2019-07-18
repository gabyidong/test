
const assert = require('assert');
const fs = require('fs')

describe('fs', ()=>{

  it('appendFile(path, buffer, {encoding:"utf8", flag:"w"}, callback)',async ()=>{
		const cBuf = Buffer.from('start:fs.appendFile(path, buffer, {encoding:"utf8", flag:"w"}, callback)\n');
		const err = await new Promise((resolve, reject)=>{
      fs.appendFile('test.txt', cBuf, { encoding:"utf8", flag:"w" }, (err)=>{
        resolve(err)
      })
    })
    assert.equal(null, err)
	})

	it('appendFile(path, buffer, callback)',async ()=>{
		const cBuf = Buffer.from('1、fs.appendFile(path, buffer, callback)\n');
		const err = await new Promise((resolve,reject)=>{
      fs.appendFile('test.txt', cBuf, (err)=>{
        if(err){
          reject(err)
          return
        }
        resolve(null)
      })
    })
    assert.equal(err, null)
  })

  it('appendFile(path, buffer, string:utf8, callback)',async ()=>{
		const cBuf = Buffer.from('2、fs.appendFile(path, buffer, string:utf8, callback)\n');
		const err = await new Promise((resolve,reject)=>{
      fs.appendFile('test.txt', cBuf, 'utf8', (err)=>{
        if(err){
          reject(err)
          return
        }
        resolve(null)
      })
    })
    assert.equal(err, null)
  })
  
  it('appendFile(path, buffer, {encoding:"utf8"}, callback)',async ()=>{
		const cBuf = Buffer.from('3、fs.appendFile(path, buffer, {encoding:"utf8"}, callback)\n');
		const err = await new Promise((resolve,reject)=>{
      fs.appendFile('test.txt', cBuf, { encoding:"utf8" }, (err)=>{
        if(err){
          reject(err)
          return
        }
        resolve(null)
      })
    })
    assert.equal(err, null)
  })
  
  it('appendFile(path, buffer, {encoding:"utf8", flag:"ax"}, callback), Error: EEXIST: file already exists',async ()=>{
		const cBuf = Buffer.from('4、fs.appendFile(path, buffer, {encoding:"utf8", flag:"ax"}, callback), Error: EEXIST: file already exists\n');
		const err = await new Promise((resolve, reject)=>{
      fs.appendFile('test.txt', cBuf, { encoding:"utf8", flag:"ax" }, (err)=>{
        resolve(err)
      })
    })
    assert.equal(true, err instanceof Error)
  })
  
  it('chmod(path, mode = , callback)',async ()=>{
		const cBuf = Buffer.from('4、fs.appendFile(path, buffer, {encoding:"utf8", flag:"ax"}, callback), Error: EEXIST: file already exists\n');
		const err = await new Promise((resolve, reject)=>{
      fs.appendFile('test.txt', cBuf, { encoding:"utf8", flag:"ax" }, (err)=>{
        resolve(err)
      })
    })
    assert.equal(true, err instanceof Error)
  })
})
