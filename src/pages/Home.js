import React, {useState, useEffect} from "react";
import {data} from "../API_endpoints"

function Home(){
    const [posts, setPosts] = useState([]);

    const getPosts = (API)=>{
        fetch(API)
        .then(res => res.json())
        .then(data=>{
            setPosts(data);
        });
    }
    useEffect(()=>{
        getPosts(data)
    },[]);
    
    return(
        <table className="table table-hover">
            <thead>
              <tr>
                <th className="col">#</th>
                <th className="col">Title</th>
                <th className="col">Body</th>
                <th className="col"></th>
                <th className="col"></th>
              </tr>
            </thead>
            <tbody>
              {
                posts.map((post,index) => {
                    return(
                        <tr key={index} >
                            <td className="table-item">{index+1}</td>
                            <td className="table-item">
                                <a href={`/post/${post.id}`}>
                                    {post.title}
                                </a>
                            </td>
                            <td className="table-item">{post.body}</td>
                            <td className="table-item">
                                <a className="btn btn-light" href={`/edit/${post.id}`}><i className="fa-solid fa-pen"></i></a>
                            </td>
                            <td className="table-item">
                                <a className="btn btn-light" href={`/delete/${post.id}`}><i className="fa-solid fa-trash"></i></a>
                            </td>
                        </tr>
                        )
                })
              }
            </tbody>
        </table>
    )
}

export default Home;