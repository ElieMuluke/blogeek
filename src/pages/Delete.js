import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom"
import { specificdata } from "../API_endpoints";
import axios from "axios";

function Delete() {
    let params = useParams()
    let navigate = useNavigate()
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

    function deleteItem(){
        axios.delete(specificdata+params.id)
        .then((response) => {
           console.log(response.status)
           navigate("/")
        }).catch((error) => {
            console.log(error.status)
        })
        // console.log("executed");
    }
    
    setTimeout(deleteItem, 5000)

    return(
        <div className="delete">
            <h2>Delete</h2>

            <p>The Post with title:<span className="in-delete-title">({post.title})</span> will be deleted in 5s then redirected to home</p>
        </div>
    );
}

export default Delete;