const csv = require('csv-parser')
const fs = require('fs')
const results = [];

const express = require('express')
const app = express()
const port = 8001


const converter = ()=>{
    fs.createReadStream('data.csv')
        .pipe(csv({}))
        .on('data', (data) => results.push(data))
        .on('end', () => {
            console.log(results)
        })
}

converter()

/*const jsontostring = (req, res)=> {
    
    converter()


    console.log('Handler', req.url)
    res.end(JSON.stringify(results))
}*/

const listeningStartedCallback = () => {
    console.log(`Listening on server. Port: ${port}`)
}
app.listen(port, listeningStartedCallback)

app.get('/api/results', (req, res) => {
    res.send(results)
})


//module.exports = converter