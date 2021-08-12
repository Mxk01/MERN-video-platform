import {useState,useRef,useEffect} from 'react'
import './Upload.css'
import BackupSharpIcon from '@material-ui/icons/BackupSharp'; 
import axios from 'axios';
import {useHistory} from 'react-router-dom'

function Upload() {
    const elementRef = useRef();


    // useEffect(() => {
    //     const divElement = elementRef.current;
    //     console.log(divElement); // logs <div>I'm an element</div>
    //   }, []);


   let [title,setTitle] = useState("");
   let [thumbnail,setThumbnail] = useState("");

   let [file,setFile] = useState(null);
   let history = useHistory(); 
    let [description,setDescription] = useState("");
    let uploadVideo = (e) => {
        
       e.preventDefault();
       
       let newVideo = {
        title,
        description,
        // thumbnail
    }
    console.log(file)
       if(file)
       {
   //     console.log(file.size);
      

       const formData = new FormData();

       let filename = `${Date.now()}${file.name}`;

       formData.append("name",filename) 
       formData.append("file",file);
       newVideo.path = filename
       newVideo.size = file.size;
    
      var fileExtension = filename.split('.').pop();
        
    //   if(fileExtension == 'mp3' || fileExtension == 'wav' || fileExtension=='wmv' || fileExtension =='avi')
    //   {
        // passing data we got from image to upload route 
       let uploadImage = async() =>  await axios.post('/upload',formData) 

       uploadImage();

       let uploadVideo = async() => await axios.post('/video',newVideo);

       uploadVideo()
     // to log formData 
    //    for (var key of formData.entries()) {
    //     console.log(key[0] + ', ' + key[1])
    // }
             history.push('/')
    //   }
    //   else 
    //   {
    //      alert('Invalid file extension')
    //   }
       } 

       else 
       {
           console.error('No data found')
         
       }
       
 
   }
    return (
        <div className="video__upload">
            <header className="main__header"></header>
            <form className="video__form" 
            onSubmit={(e)=>uploadVideo(e)}
            >
            {
               file ? ( <video src={ URL.createObjectURL(file)} controls ref={elementRef}
                onClick = {()=>{
                    const myVideo = elementRef.current;
                     
                    // console.log(myVideo)
                    // if (myVideo.paused)  myVideo.play(); 
                    // myVideo.pause(); 
            
                }} 
            ></video>) :  ( <video src={" "}></video>)
                    
              }
                          {/* <input type="text" onChange={(e)=>setThumbnail(e.target.value)} placeholder="Thumbnail" /> */}

            <input type="text" style={{width:"30vw"}} onChange={(e)=>setTitle(e.target.value)} placeholder="Title" />
             <input type="file" onChange={(e)=>setFile(e.target.files[0])} id="upload_btn" />
             
            <input type="text" style={{width:"30vw"}} onChange={(e)=>setDescription(e.target.value)} placeholder="Description" />
            <label htmlFor="upload_btn">Upload video <BackupSharpIcon/></label>
            <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default Upload
