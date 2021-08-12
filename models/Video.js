let mongoose = require('mongoose');
let Schema = mongoose.Schema; 


let videoSchema = new Schema( 
 {
     title:{
         type:String,
         required:true
     },
     description:{
         type:String,
         required:true
     },
     size: {
         type:Number
     }, 
  
     path: {
         type:String,
         required:true
     }

 },{timestamps:true}
)


module.exports = mongoose.model('video',videoSchema);