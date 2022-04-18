import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { specificdata } from "../API_endpoints";
import axios from "axios";

function Edit() {
    let params = useParams()
    let navigate = useNavigate()
    
    const handleSubmit = (event) => {
        let title = event.target[0].value
        let subject = event.target[1].value
        let id = params.id

        axios.patch(specificdata+id,
            { "title": title, "body": subject }
        ).then(function (response) {
          console.log(response);
          navigate("/")
          })
          .catch(function (error) {
            console.log(error);
          });

        event.preventDefault();
      };
    return(
        <div className="edit">
            <h2>Edit Post</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" />
                <textarea rows={14} type="text" name="subject" placeholder="Subject" />
                <button type="submit" >Edit Post</button>
            </form>
        </div>
    );
}

export default Edit;