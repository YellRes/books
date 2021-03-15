const fs = require('fs');
const {stdin, stdout} = process;

function read() {
  console.log('')
  stdout.write(' Enter you choice: ')
  stdin.resume()
  stdin.setEncoding('utf8')
  stdin.on('data', option)
}

function option(data) {
  if (!files[Number(data)]) {
    stdout.write(' Enter your choice:')
  } else {
    stdin.pause()
  }
}

fs.readdir(__dirname, (err, files) => {

  console.log('')

  if (!files.length) {
    return console.log('No file to show!! \n')
  }

  console.log('select a file')

  function file(i) {
    var fileName = files[i]

    fs.stat(__dirname + '/' + fileName, (err, stat) => {

      console.log(i + fileName)

      i++
      if (i == files.length) {
        read()
      } else {
        file(i)
      }
    })
  }

  file(0)
})





