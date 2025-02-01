require('dotenv').config();
const {connnectToMongo}=require('./functions/connection');
connnectToMongo(process.env.DB).then(()=>{
  console.log("connection success");
})


const express = require('express');
const app = express();
const cors=require('cors');
const port = 5000

const corsOptions={
  origin:process.env.FRONTED,
  methods:"GET,POST,PUT,DELETE,PATCH",
}
app.use(express.json())
app.use(cors(corsOptions))

app.get("/",(req,res)=>{
 return res.json("server is running ");
})

// Available Routes
app.use('/api/auth', require('./functions/auth'))
 app.use('/api/notes', require('./functions/notes'))


 app.listen(port, () => {
  console.log(`iNotebook listening at http://localhost:${port}`)
})