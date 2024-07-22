const express= require("express");
const { PORT }=require('./config/serverConfig.js');

const setUpAndStartServer =async()=>{
    //create the express object
    const app=express();
    app.listen(PORT,()=>{

        console.log(`server started at ${PORT}`);
    })
}
setUpAndStartServer();