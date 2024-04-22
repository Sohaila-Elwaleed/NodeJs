//#region Requires
const http = require("http");
const fs = require("fs");
//#endregion

//#region Reading Data
var mainHTML = "";
fs.readFile("../task2/index.html","utf-8",(err, data)=>{
    if(err){
        console.log("7asal Error")
    }else{
        mainHTML = data;
    }
})
var StyleCSS = "";
fs.readFile("../task2/style.css","utf-8",(err, data)=>{
    if(err){
        console.log("7asal Error")
    }else{
        StyleCSS = data;
    }
})
var ScriptJS = "";
fs.readFile("../task2/server.js","utf-8",(err, data)=>{
    if(err){
        console.log("7asal Error")
    }else{
        ScriptJS = data;
    }
})
var Image2 = "";
fs.readFile("../task2/images/2.jpg",(err, data)=>{
    if(err){
        console.log("7asal Error")
    }else{
        Image2 = data;
    }
})
var IconFav = "";
fs.readFile("../task2/Icons/favicon.ico",(err, data)=>{
    if(err){
        console.log("7asal Error")
    }else{
        IconFav = data;
    }
})
//#endregion


http.createServer((req, res)=>{
    //#region GET
    if(req.method == "GET"){
        switch(req.url){
            case '/':
            case '/index.html':
            case '/task2/index.html':
                res.write(mainHTML);
            break;
            case '/style.css':
            case '/task2/style.css':
                res.write(StyleCSS);
            break;
            case '/server.js':
            case '/task2/server.js':
                res.write(ScriptJS);
            break;
            case '/2.jpg':
            case '/images/2.jpg':
            case '/task2/images/2.jpg':
                res.write(Image2);
            break;
            case '/favicon.ico':
            case '/Icons/favicon.ico':
            case '/task2/Icons/favicon.ico':
                res.write(IconFav);
            break;
        }
        res.end();
    }
    
    //#endregion
}).listen(7000,()=>{console.log("http://localhost:7000/")});