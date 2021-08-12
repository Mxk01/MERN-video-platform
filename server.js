let express = require('express');
let multer = require('multer');
let app = express();
let port = process.env.PORT || 5000;
let path = require('path')
let videoRoute = require('./routes/videos')
let mongoose = require('mongoose');
let dotenv = require('dotenv');


dotenv.config()
let storage = multer.diskStorage({
     destination: (req,file,cb) => {
        // images folder where we'll upload the images
        cb(null,'videos'); 
   }
,
    filename: (req,file,cb) => {
        //with req.body.name we can access file from frontend (I set it up with formData.append frontend)
      cb(null,req.body.name) // name of file comes from req.body.name 
    }
})

let upload = multer({storage}); 

app.use("/videos", express.static(path.join(__dirname, "/videos")));
app.use(express.urlencoded({extended:true}))
 app.use(express.json());
app.use('/video',videoRoute);

mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log('Connected to mongoose!'))
.catch(e=>e);


app.post('/upload',upload.single('file'),(req,res)=>{
    try {
    return res.json({message:"Video uploaded!"})
   console.log(req.body);
    }
    catch(e)
    {
        return res.json({error:"File couldn't be uploaded"})
    }
})




app.listen(port, ()=>console.log(`Listening to the server on port ${port}`))