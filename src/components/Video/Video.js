import React from 'react'
import './Video.css'
import * as timeago from 'timeago.js';

function Video({title,description,path,size,_id,createdAt}) {
     return (
        <div className="video">
             <video controls src={`http://localhost:5000/videos/${path}`}></video>
            <div className="sub__container"> 
            <img className="user__avatar" src="https://i0.wp.com/butwhythopodcast.com/wp-content/uploads/2020/08/noticia-1597169895-meliodas.jpg?resize=800%2C440&ssl=1" alt="" />
            <h2>{title}</h2>
            </div>
            <div style={{display:"flex",flexDirection:"column"}}> 
            <p>{description}</p>

            <p>{timeago.format(createdAt)}</p>
            </div>
            <div className="video-actions" style={{display:"flex",justifyContent:"space-around"}}> 
             <button style={{backgroundColor:"#1B1464",color:"white"}}>Edit</button>
            <button style={{backgroundColor:"#5758BB",color:"white"}}>Delete</button>
            </div>
        </div>
    )
}
 
export default Video
