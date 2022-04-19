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
    }
    
    setTimeout(deleteItem, 5000)

    return(
        <div className="delete">

            <div className="alert alert-success" role="alert">
                <h2 className="alert-heading">Successful deletion!</h2>
                <p><span className="in-delete-title">({post.title})</span> will be deleted in 5s.</p>
                <p>Aww yeah, you successfully deleted the post. Hold on a little, you will be redirected to home page in a few.</p>
            </div>
        </div>
    );
}

export default Delete;