import React,{useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import {specificdata} from "../API_endpoints"

function Post() {
    let params = useParams()

    const [post, setPost] = useState([]);

    const getPosts = (API)=>{
        fetch(API)
        .then(res => res.json())
        .then(data=>{
            setPost(data);
        });
    }
    useEffect(()=>{
        getPosts(specificdata+params.id)
    },[params.id]);

    return(
        <div className="post">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}

export default Post;