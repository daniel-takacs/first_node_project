const http = require('http');
const fs = require('fs');
const port = 8000;



const firstNodeProject = (req, res) => {
    console.log('helloRequest', req.url);
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('index.html', function(error, data) {
    if (error) {
        res.writeHead(404)
        res.write('Error: File not found')
    }else {
        res.write(data)
    }
    res.end()
})
}
const server = http.createServer(firstNodeProject);

server.listen(port, ()=> {
    console.log(`Listeninig on port ${port}`);
});