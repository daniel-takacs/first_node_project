const csvtojson = require('csvtojson')
const fs = require('fs')

const csvFilePath = "data.csv"

csvtojson()
    .fromFile(csvFilePath)
    .then((json) => {
        console.log(json)

        fs.writeFileSync("data.json", JSON.stringify(json, null, 4),"utf-8", (err)=>{
            if(err) console.log(err)
    })})
