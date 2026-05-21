import express from "express";

const app= express();
/*
app.get("/",(req,res)=>{
    res.send("Server is ready");
});
*/

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:"Why don't scientists trust atoms?"
        },
        {
            id:2,
            title:"Because they make up everything!"
        }
    ];
    res.json(jokes);
});  

const port= process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});