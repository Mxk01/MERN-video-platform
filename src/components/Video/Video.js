import React from 'react'
import './Video.css'
import * as timeago from 'timeago.js';
import {useHistory} from 'react-router-dom'
import axios from'axios' 

function Video({title,description,path,size,_id,createdAt}) {
    
    let history = useHistory(); 
    
    let deleteVideo = async(id) => {
         await axios.delete(`/video/${id}`)
         history.go(0) // re-render page automatically


    }
     return (
        <div className="video">
             <video controls src={`http://localhost:5000/videos/${path}`}></video>
            <div className="sub__container"> 
            <img className="user__avatar" src="https://i0.wp.com/butwhythopodcast.com/wp-content/uploads/2020/08/noticia-1597169895-meliodas.jpg?resize=800%2C440&ssl=1" alt="" />
            <h2>{title}</h2>
            </div>
            <div style={{display:"flex",flexDirection:"column"}}> 
            <p>{description}</p>

            <p> Posted {timeago.format(createdAt)} by : </p>
                         </div>
            <div className="video-actions" style={{display:"flex",justifyContent:"space-around"}}> 
             <button style={{backgroundColor:"#1B1464",color:"white"}}>Edit</button>
            <button onClick={()=>deleteVideo(_id)} style={{backgroundColor:"#5758BB",color:"white"}}>
                Delete
                </button>
            </div>
        </div>
    )
}
 
export default Video
