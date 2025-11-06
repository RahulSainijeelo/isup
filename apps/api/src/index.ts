import express from "express";
import v1Router from "./routes/v1/index.routes.js"
const app = express();

app.use("/api/v1",v1Router)

app.get("/website",(req,res)=>{

})


app.get("/status/:websiteId",(req,res)=>{
    
})


app.listen(process.env.PORT||3000)