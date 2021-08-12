import React from 'react'
import './Video.css'
function Video({title,description,path,size,_id}) {
    return (
        <div className="video">
            <h1>{title}</h1>
            <p>{description}</p>
            <video controls src={`http://localhost:5000/videos/${path}`}></video>
        </div>
    )
}
 
export default Video
