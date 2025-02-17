const http = require("node:http");
const fs = require("node:fs");
let fileName;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fileName = "./index.html";
    } else if (req.url === "/about") {
        fileName = "./about.html";
    } else if (req.url === "/contact-me") {
        fileName = "./contact-me.html";
    } else {
        fileName = "./404.html";
    }
    fs.readFile(fileName, (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-type": "text-html" });
            res.write(data);
            res.end();
        } else {
            res.writeHead(200, { "Content-type": "text/html" });
            res.write(data);
            res.end();
        }
    })
})

server.listen(8080);