import axios from 'axios';
import React, { useEffect, useState } from 'react'

function DataFetching() {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({});
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);
    const [id, setId] = useState(1);

    //Fetching All data from API
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
             .then(res => {
                 console.log(res)
                 setPosts(res.data)
             })
             .catch(err => {
                 console.log(err)
             })
    },[])

    //Fetching single data from API according to User Input
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
             .then(res => {
                 console.log(res)
                 setPost(res.data)
             })
             .catch(err => {
                 console.log(err)
             })
    },[idFromButtonClick])

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type="button" onClick={handleClick}>Fetch Post</button>
            <div>{post.title}</div>
            {/* <ul>
                {
                    posts.map(post => (
                        <li key={post.id}>{post.title}</li>)
                    )}
            </ul> */}
        </div>
    )
}

export default DataFetching
