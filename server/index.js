import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Connection } from './DBConnection/Connections.js';
import dotenv from 'dotenv';
const app=express();
dotenv.config();

//Database Connection
const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;
Connection(username,password);

const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>{
    console.log(`Listening to PORT ${PORT}`)
})