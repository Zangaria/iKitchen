import express from 'express';
import dotenv from 'dotenv';
//import {} from './config db/'
import cors from 'cors';
//import {} from './controllers/'

const app = express();
app.use(express.json());

const port= 3005;

app.get('/*',(req,res)=>{
    res.json({msg: 'service is up', Approved:true});
})
