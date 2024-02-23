import './Addpost.css';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Addpost = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [likes, setLikes] = useState(0);
    const [shares, setShares] = useState(0);
    const [comments, setComments] = useState(0);
    const navigate = useNavigate();
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            formData.append('likes', likes);
            formData.append('shares', shares);
            formData.append('comments', comments);

            console.log(formData.get('title'), formData.get('description'), formData.get('likes'), formData.get('shares'), formData.get('comments'));
            const response = await fetch("http://127.0.0.1:8000/api/posts/with-likes-comments/", {
                method: "POST",
                body: formData,
                // headers: {
                //     // Set the Content-Type header for form data
                //     'Content-Type': 'multipart/form-data',
                // },
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data);
            alert('Post added successfully');
            setTitle('');
            setDescription('');
            setLikes(0);
            setShares(0);
            setComments(0);
            navigate('/');

        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="post_add">
            <h1 className="title">Add a Post</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" onChange={(e) => setTitle(e.target.value)} name="title" required />
                <label htmlFor="content">Description</label>
                <textarea id="content" onChange={(e) => setDescription(e.target.value)} name="content" required />
                <label htmlFor="likes">Likes</label>
                <input type="number" id="likes" onChange={(e) => setLikes(e.target.value)} name="likes" required />
                <label htmlFor="shares">Shares</label>
                <input type="number" id="shares" onChange={(e) => setShares(e.target.value)} name="shares" required />
                <label htmlFor="comments">Comments</label>
                <input type="number" id="comments" onChange={(e) => setComments(e.target.value)} name="comments" required />
                <button type= "submit">Add Post</button>
            </form>
        </div>
    )
}

export default Addpost