const express = require("express");
const router = express.Router();


//Index
router.get("/",(req,res) =>{
    res.send("GET for posts");

});

//show
router.get("/:id",(req,res)=>{
    res.send("GET for posts id ");

});

//post
router.post("/posts",(req,res)=>{
    res.send("post for posts");
});

//Delete
router.delete("/posts/:id",(req,res)=>{
    res.send("Delete for post id");

});

module.exports = router;
