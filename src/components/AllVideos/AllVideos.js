import React, { useState,useEffect } from 'react'
import './AllVideos.css'
import axios from 'axios';

import Video from '../../components/Video/Video.js';
function AllVideos() {
   let [videos,setVideos] = useState([]);
    useEffect(()=>{
        
        let getVideos = async() => 
        {
            let videos = await axios.get('/video')
           setVideos(videos.data.message);
        }
        getVideos()

    },[])

    return (
        <div className="videos__grid">
             {
             videos.map((video)=>(<Video {...video}/>))
             }
         </div>
    )
}

export default AllVideos
