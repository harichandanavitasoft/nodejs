const express=require("express");
const route =express.Router();
const admininfo = require("./adminmodules");

route.post("/admin/login",(req, res)=>{
    const ai = new admininfo(req.body);
    
    ai.save();
    res.status(201).json(ai);
});

module.exports = route;