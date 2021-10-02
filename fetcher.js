const https = require('https');

const fs = require('fs')
const args = process.argv.slice(2); 





const pageFetcher = function(url, localFilePath) {

  const options = {
    hostname: url,
    method: 'GET'
  }
  
  const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)
  
    res.on('data', d => {
      process.stdout.write(d)
    })
  })
  
  req.on('error', error => {
    console.error(error)
  })
  
  req.end()


  fs.writeFile(url, localFilePath, err => {
    if (err) {
      console.log(err)
      return;
    }
  });
};

pageFetcher(args[0], args[1]);