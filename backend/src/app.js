import express from "express";
import {createServer} from "node:http";

import {Server} from "socket.io";

import mongoose from "mongoose";
import {connectToSocket} from"./controllers/socketManager.js";

import cors from "cors";
import userRoutes from "./routes/userRoutes.js"


const app=express();
const server=createServer(app);
const io=connectToSocket(server);

app.set("port",(process.env.PORT||8000));
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));

app.use("/api/v1/users",userRoutes);



app.get("/home",(req,res)=>{
    return res.json({"hello":"World"});
});

const start=async()=>{
    const connectionDb=await mongoose.connect("mongodb+srv://mbhartinna2008:CUHzbdl9Ug76D3Gx@cluster0.ysmuk.mongodb.net/")
    console.log("connection established successfully")
server.listen(app.get("port"),()=>{
    console.log("app is listening on the port 8000");
});

}
start();



