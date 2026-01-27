const express=require('express')
const app=express() 
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const cors=require('cors')
app.use(cors())
dotenv.config();
app.use(express.json());

mongoose
.connect(
    process.env.MONGO_URI
)
.then(()=>{console.log("Connected to MongoDB")})
.catch((err)=>{console.log(err)}
)

app.use('/auth',require('./routes/authRoutes'))
app.use('/tasks',require('./routes/taskRoutes'))
app.get('/api',(req,res)=>{
    res.send('Hi from server');
})
app.post('/api',(req,res)=>{
    const temp=req.body;
    res.send(temp);
})
app.listen(4000,()=>{
    console.log("server is running on port 4000");
})