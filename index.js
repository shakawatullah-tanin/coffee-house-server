const express = require ("express")

const port = process.env.PORT || 5000;

const app = express()

const cors = require ("cors")


//add middleware

app.use(cors())
app.use(express.json())


app.get("/",(req,res)=>{


    res.send("Hello Coffee")

})

app.listen(port,()=>
console.log("Server Running on port :",port))