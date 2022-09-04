import React from 'react';
import c from'./MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
   
    let postElements = props.postData.map(p=> <Post message = {p.post} like = {p.likesCount}/> );
    let newPostsElements = React.createRef();
    let addPost = () =>{
        let text = newPostsElements.current.value;
        props.addPost(text);
    }
    return(
        <div>
            <div>Ava</div>
            <div>My post</div>
            
            <div>New post</div>
            <textarea ref={newPostsElements}></textarea>
            <button>Add post</button>
            {postElements}
            
            
            </div>
    )
        
            
        

    
}
export default MyPosts;