const db = require ("../db/db.json");
const fs = require("fs");
let id = db.length + 1;
function apiRoutes(app) {
    app.get("/api/notes", (req,res) => {
        res.json(db)
    })
    app.post("/api/notes",(req,res) => {
        req.body.id = id++;
        db.push(req.body)

        fs.writeFile("./db/db.json", JSON.stringify(db),(error) => {
            if (error){
                console.log(error)}
        })
        res.json(db)
    }) 

    app.delete('/api/notes/:id', (req, res) => {
        let reqId = req.params.id;
         reqId=parseInt(reqId)
           

              console.log(reqId)
        for (var i = 0; i < db.length; i++) {

            if (db[i].id === reqId) {
                db.splice(i, 1);
            }
        }

        fs.writeFile('./db/db.json',JSON.stringify(db),function (){

        })

        res.json(db)
    })
}

module.exports=apiRoutes