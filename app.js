const express=require("express");

const app=express();

app.get("/",(req,res)=>
{
    res.send("hello express");
});

app.get("/api/main",(req,res)=>{
    res.write("<h1>Exxpress.js</h1>");
    res.write("<p>Express is a node js web application framwork that provides us broad features for web and mobile applications.It is a layer built on the top of the node js that helps manages servers and routes.</p>");
    res.end();
});
app.listen(8005);