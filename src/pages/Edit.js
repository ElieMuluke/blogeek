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
                <div className="form-group">
                  <label for="title">Title: </label>
                  <input className="form-control form-control-lg" id="title" aria-describedby="titleHelp" type="text" name="title" placeholder="Title" required />
                </div>
                <div className="form-group">
                  <label for="subject">Subject: </label>
                  <textarea className="form-control form-control-lg" id="subject" aria-describedby="subjectHelp" rows={5} type="text" name="subject" placeholder="Subject" required/>
                </div>
                <button type="submit" className="btn">Edit Post</button>
            </form>
        </div>
    );
}

export default Edit;