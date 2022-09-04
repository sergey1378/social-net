import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import c from'./Profile.module.css';

const Profile = (props) => {
    return(
        <div className= {c.content}>
            <MyPosts postData={props.postDt.postData} addPost={props.addPost} />
            </div>
    )
        
            
        

    
}
export default Profile;