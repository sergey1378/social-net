import React from 'react';
import logo from './business-logo-screen.jpg';
import c from'./Post.module.css';

const Post = (props) => {
    return(
        <div>
           
           <img src={logo}/>
           <div>{ props.message }</div>
           <button>Delete post</button>
           <span>Like {props.like}</span>
            </div>
    )
        
            
        

    
}
export default Post;