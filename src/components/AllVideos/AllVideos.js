import {useState,useRef,useEffect} from 'react'
import './AllVideos.css'
import axios from 'axios';

import Video from '../../components/Video/Video.js';
function AllVideos() {
   let [videos,setVideos] = useState([]);
   const elementRef = useRef();

 
   let displayVideos = (e) => { 
      
      
      let foundVideos =  videos.filter((item) => item.title.indexOf(e.target.value) > -1) 
      setVideos(foundVideos);

   }
    useEffect(()=>{
        
        let getVideos = async() => 
        {
             let videos = await axios.get('/video')
           setVideos(videos.data.message);
        }
        getVideos()

    },[])

    return (
        <div> 
             <input style={{border:0,borderRadius:0,borderBottom:"3px solid #686de0",
            fontSize:"1rem",marginLeft:"33px",
            color:"#686de0"}}
            placeholder="Search video .. " 
            ref={elementRef}
            onChange={(e) => displayVideos(e)}
            type="text" />
        <div className="videos__grid">
           
             {
                 
             videos.map((video)=>(<Video className="video__item" {...video}/>))
             }
         </div>
         </div>
    )
}

export default AllVideos
