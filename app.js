var express = require("express");
var path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "src")));
app.use(express.static(path.join(__dirname, "dist")));
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', 'http://localhost:3000/');
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.get("/", function(req, res) {
    res.set('Content-Type', 'application/json');
    res.sendFile(path.join(__dirname, "templates/index.html"));
});

app.listen(3000, function() {
    console.log("Listening on port 3000...");
});