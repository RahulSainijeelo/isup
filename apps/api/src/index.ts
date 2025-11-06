import express from "express";
import v1Router from "./routes/v1/index.routes.js"
const app = express();
import { prismaClient } from "@repo/store/client";
app.use("/api/v1",v1Router)

app.get("/website",(req,res)=>{
  res.send("you reached here by chance")
})


app.get("/status/:websiteId",(req,res)=>{
    
})


app.listen(process.env.PORT||8080)