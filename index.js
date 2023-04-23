const express=require('express');
const app=express();
const port=3000;
const categories =require( './Data/categories.json')
const cors=require('cors')
app.use(cors())


app.get('/',(req,res)=>{
    res.send("Dragon news server")
})
app.get('/categories',(req,res)=>{
    res.send(categories)
})

app.listen(port,()=>{
    console.log(`Port is : ${port}`)
})