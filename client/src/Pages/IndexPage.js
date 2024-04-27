import Post from "../Post";
import Footer from "../Footer";
import Api from "../Api-books";
import {useState, useEffect} from 'react';
import gif from "../Pages/Reading Woman — Bodil Jane.gif";
import axios from 'axios';


export default function IndexPage() {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/post').then(response => {
            response.json().then(posts =>{
              setPosts(posts)
            }) 
        })
    }, []);
    return(
        <>
        <h2 className="gif-presentation-title">Uncover profound stories and insights, savoring each book one at a time.</h2>
        <div className="gif-presentation">
            <img src={gif} alt="presentation image" />
        </div>
        <Api/>
        <div className="display-post">
        <h1>Latest Articles</h1>
        <div className="posts-articles">
        {posts.length > 0 && posts.map(post => (
        <Post {...post}/>
            ))}
        </div>
        </div>
        <Footer />
        </>
    );

}
