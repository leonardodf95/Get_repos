import express from "express";
import cors from 'cors'
import routes from "./src/routes/index.js";


const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

const PORT = process.env.PORT || 3333

app.listen(PORT, ()=>{
    console.log('Server is listen')
})