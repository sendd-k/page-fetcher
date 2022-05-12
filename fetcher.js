const fs = require('fs');
const args = process.argv.slice(2);
const url = args[0]
const filePath = args[1]
const content = 'Some content!';



const request = require('request');
request(`${url}`, (error, response, body) => {
  console.log(`Downloaded and saved ${body.length} to ./index.html`);
  fs.writeFile(`${filePath}`, body, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
});


