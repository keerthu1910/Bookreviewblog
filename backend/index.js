const express = require('express');
const cors = require('cors');
require('dotenv').config({path:'/home/keerthana/Desktop/Tasks/Bookreviewblog/.env'});
const port = process.env.SERVER_PORT || 3006
const app = express();
app.use(cors());
app.use(express.json());

app.listen(port,()=>{
    console.log(`app listening in port ${port}`)
})