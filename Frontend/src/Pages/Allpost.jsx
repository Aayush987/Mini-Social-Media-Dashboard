import { useEffect, useState } from 'react';

const Allpost = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const response = await fetch("http://127.0.0.1:8000/api/posts/");
            const data = await response.json();
            console.log(data);
            setPosts(data);
        };
        getPosts();
    },[])
    
  return (
    <div>
        <h1 className="title">
            All Posts
        </h1>
        <div className="Post">
        {posts.map((post,index) => (
            <div className= "PostCard" key={index}>
                <h2 className='title'><strong>{post.title}</strong></h2>
                <p>Description: <strong>{post.description}</strong></p>
                <p>No. of Likes: <strong>{post.likes}</strong></p>
                <p>No. of Shares: <strong>{post.shares}</strong></p>
                <p>No. of comments: <strong>{post.comments}</strong></p>
            </div>
        ))}
        </div>

    </div>
  )
}

export default Allpost