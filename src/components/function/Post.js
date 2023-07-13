import React, {useEffect, useState} from 'react';
import axios from "axios";

const Post = (props) => {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)
    const handleClick = ()=>{
        setIdFromButtonClick(id)
        }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {setPost(response.data)
                console.log()} )
            .catch(error => console.log(error))
    }, [idFromButtonClick])
    return (
        <div>
            <label htmlFor="post">Post Id </label>
            <input type="text" id="post" value={id} onChange={e=>setId(e.target.value)}/>
            <button type="button" onClick={handleClick}>Fetch post</button>
            <hr/>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </div>
    );
}
export default Post;