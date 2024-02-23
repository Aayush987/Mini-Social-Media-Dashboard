import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { Link } from "react-router-dom";


const data = [
    ["Months", "Likes", "Followers", "Shares"],
    ["Jan", 300, 400, 200],
    ["Feb", 1170, 460, 250],
    ["March", 660, 1120, 300],
    ["April", 1030, 540, 350],
    ["May", 1030, 540, 350],
    ["June", 1030, 540, 350],
    ["July", 1030, 540, 350],
    ["Aug", 1030, 540, 350],
    ["Sept", 1030, 540, 350],
    ["Oct", 1030, 540, 350],
    ["Nov", 1030, 540, 350],
    ["Dec", 1030, 540, 350],
  ];

const options = {
    title: "Statistics",
}

const Dashboard = () => {
    const [posts, setPosts] = useState(0);
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState(0);
    const [shares, setShares] = useState(0);
  
    useEffect(() => {
        const preload = async () => {
            const response = await fetch("http://127.0.0.1:8000/api/dashboard/");
            const data = await response.json();
            console.log(data);
            setPosts(data.total_posts);
            setLikes(data.total_likes);
            setComments(data.total_comments);
            setShares(data.total_shares);
        };

        preload();
    },[]);



  return (
    <div className= "main">
        <div className="leftside">
            <h1>Social</h1>
            <div className="navigations">
               <Link className="btn" to = "/addPost">Add Post</Link>
                <Link className="btn" to = "/allPosts">All Posts</Link>
                <button>Analytics</button>
                <button>Messages</button>
                <button>Tools</button>
                <button>Settings</button>
            </div>
        </div>

        <div className="rightside">
            <h1 className="title">Analytics Dashboard</h1>
            <div className="content">
                <div className="card">
                    <h2>Posts</h2>
                    <p>{posts}</p>
                </div>
                <div className="card">
                    <h2>Likes</h2>
                    <p>{likes}</p>
                </div>
                <div className="card">
                    <h2>Comments</h2>
                    <p>{comments}</p>
                </div>
                <div className="card">
                    <h2>Shares</h2>
                    <p>{shares}</p>
                </div>
            </div>
            <div className="graphs">
             <div className="line">
                    <Chart  
                        chartType= "Line"
                        width={'75%'}
                        height={'200px'} 
                        data={[["Months", "Likes"], ["Jan", likes],[ "Feb", likes + 100], ["March", likes + 200], ["April", likes + 250], ["May", likes + 200], ["June", likes + 150], ["July", likes + 300], ["Aug", likes + 70], ["Sept", likes + 80], ["Oct", likes + 450], ["Nov", likes + 100], ["Dec", likes + 110]]}
                        options={options}
                    />
                </div>
                <Chart
                   chartType= "Bar"
                   width={'100%'}
                   height={'300px'} 
                   data={data}
                    options={options}
                />
            </div>
        </div>
    </div>
  )
}

export default Dashboard