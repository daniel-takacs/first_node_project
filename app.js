const parser = require('./parser.js')
let myJSON = JSON.stringify(parser)

/*fetch(myJSON)
  .then(response => response.json())
  .then(data => console.log(data));
*/
fs.writeFile('parser.json', JSON.stringify(parser, null, 4), (err) => {
    if(err) {
        throw err
    }
    console.log('JSON arra is saved')
})
