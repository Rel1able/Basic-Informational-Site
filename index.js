// const http = require("node:http");
// const fs = require("node:fs");
// let fileName;

// const server = http.createServer((req, res) => {
//     if (req.url === "/") {
//         fileName = "./index.html";
//     } else if (req.url === "/about") {
//         fileName = "./about.html";
//     } else if (req.url === "/contact-me") {
//         fileName = "./contact-me.html";
//     } else {
//         fileName = "./404.html";
//     }
//     fs.readFile(fileName, (err, data) => {
//         if (err) {
//             res.writeHead(500, { "Content-type": "text-html" });
//             res.write(data);
//             res.end();
//         } else {
//             res.writeHead(200, { "Content-type": "text/html" });
//             res.write(data);
//             res.end();
//         }
//     })
// })

// server.listen(8080);

const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
    options = {
        root: path.join(__dirname)
    }
    res.sendFile("index.html", options, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Success");
        }
    });
})
app.get("/about", (req, res) => {
    options = {
        root: path.join(__dirname)
    }
    res.sendFile("about.html", options, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Success");
        }
    });
})

app.get("/contact-me", (req, res) => {
    options = {
        root: path.join(__dirname)
    }
    res.sendFile("contact-me.html", options, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Success");
        }
    });
})


app.get("*", (req, res) => {
    options = {
        root: path.join(__dirname)
    }
    res.sendFile("404.html", options, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Success");
        }
    } )
})

app.listen(5555);

