const express = require("express")
const path = require("path")
const app = express();
const {main} = require("./lib/app")



app.use(express.static(path.join(__dirname, "public")))


app.get("/weather", async (req,res) => {
    let data = await main (req.query.location) 
    res.send(data)
})

app.listen(3001,() => {
    console.log('listening on port 3001')
})