const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv')
const cors = require('cors');


dotenv.config();


// Configure middleware
app.use(cors());

app.use(express.json())

//using routes
app.use(require('./routes/route'))

mongoose.connect(process.env.DB,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
    ).then(()=>{console.log('connected')})

app.listen(process.env.PORT,()=>{
   console.log('Done');
})