let express = require('express');
let router = express.Router()
let Video = require('../models/Video');



router.post('/',async(req,res)=>{
    let {title,description,size,path} = req.body;

try {

    let video = new Video({
        title,
        description,
        size,
        path 
          
    })

      await video.save();

      if(!video)
      {
          return res.json({error:"Video couldn't be uploaded."})
      }
      else 
      {
          return res.json({message:"Video uploaded succesfully!"});
      }
    }
    catch(e)
    {
        return res.json({error:e});
    }
})

router.get('/',async(req,res)=>{
    let videos = await Video.find({})

    if(!videos)
    {
        return res.json({error:"No videos found!"})
    }
    else 
    {
        return res.json({message:videos});
    }
})



module.exports = router;