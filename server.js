const express = require("express")
const path = require("path")
const app = express();
const {main} = require("./lib/app")

const port = process.env.PORT || 3000;



app.use(express.static(path.join(__dirname, "public")))


app.get("/weather", async (req,res) => {
    let data = await main (req.query.location) 
    res.send(data)
})

app.listen(port,() => {
    console.log(`server is running on ${port}`)
})