import express  from 'express';
import  mongoose  from 'mongoose';
import route from './route/router.js'
import cors from 'cors';
import bodyParser from 'body-parser';




const app=express()
const port=8000;
const url='mongodb://localhost:27017/data'

app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());
app.use('/employee',route)
mongoose.connect(url,{useNewUrlParser: true}).then(()=>{  
    app.listen(port,()=>{
        console.log("aap is listen on port:"+port);
    })
}).catch(error=>{
    console.log('error'+error.massge);
});




