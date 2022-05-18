const express = require("express")
const cors = require("cors")
// const path = require("path")

const app = express();

// const corOptions = {
// origin:"https://localhost:3000"
// }




//middleware

// app.use(cors(corOptions))
app.use(cors())

app.use(express.json())

app.use(express.urlencoded({extended:true}))


// Routers
const router = require("./routes/projectRouter.js")
app.use("/api/projects",router)

const router2 = require("./routes/ticketRouter.js")
app.use("/api/tickets", router2)

const router3 = require("./routes/userRouter.js")
app.use("/api/users", router3)




//Testing API

// app.get("/",(req,res) =>{
//     res.json({message:"hello There!"})
// })



//Port

const PORT = process.env.PORT || 3001 
//Server

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})