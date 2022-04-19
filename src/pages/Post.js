import React,{useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import {specificdata} from "../API_endpoints"

function Post() {
    let params = useParams()

    const [post, setPost] = useState([]);

    const getPosts = (API,aFunction)=>{
        fetch(API)
        .then(res => res.json())
        .then(data=>{
            aFunction(data);
        });
    }
    useEffect(()=>{
        getPosts(specificdata+params.id, setPost)
    },[params.id]);

    return(
        <div className="post">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">{post.title}</h3>
                    <p className="card-text">{post.body}.</p>

                    <div className="btn post-btn">
                        <a className="btn btn-light btn-lg" href={`/edit/${post.id}`}><i className="fa-solid fa-pen"></i></a>
                        <a className="btn btn-light btn-lg" href={`/delete/${post.id}`}><i className="fa-solid fa-trash"></i></a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Post;