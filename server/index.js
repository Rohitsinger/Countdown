const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv')
const cors = require('cors');

// const bodyParser = require('body-parser');
dotenv.config();


// Configure middleware
app.use(cors());

app.use(express.json())

mongoose.connect(process.env.DB,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
    ).then(()=>{console.log('connected')})

app.listen(5000,()=>{
   console.log('Done');
})