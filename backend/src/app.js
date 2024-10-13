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

app.set("port",(process.env.PORT||10000));
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));

app.use("/api/v1/users",userRoutes);



app.get("/home",(req,res)=>{
    return res.json({"hello":"World"});
});

const start=async()=>{
    app.set("mongo_user")
    const connectionDb=await mongoose.connect("mongodb+srv://mbhartinna2008:hhytdHNKZ2VIxFoM@cluster0.cgslk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log(`MONGO Connected DB HOst: ${connectionDb.connection.host}`)
    console.log("connection established successfully")
server.listen(app.get("port"),()=>{
    console.log(`app is listening on the port 10000`);
});

}
start();



