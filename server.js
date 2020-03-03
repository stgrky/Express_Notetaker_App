// Required to set up Express dependencies
var express = require("express");

// Sets up Express
var app = express();
var PORT = process.env.PORT || 4200

// Path for "public" to be local host
app.use(express.static("public"));

// Sets up Express to handle data parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Import files
var apiRoutes = require("./routes/apiRoutes");
var htmlRoutes = require("./routes/htmlRoutes")
apiRoutes(app)
htmlRoutes(app)

app.listen(PORT, function () {
    console.log("father can you hear me at http://localhost:" + PORT)
})
