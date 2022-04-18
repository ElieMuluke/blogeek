import React from "react";

function tableRow(props){
  return(
    <tr key={props.index} >
      <td>{props.index+1}</td>
      <td>{props.title}</td>
      <td>{props.body}</td>
      <td>
        <i class="fa-solid fa-pen">edit</i>
      </td>
      <td>
        <i class="fa-solid fa-trash">delete</i>
      </td>
    </tr>
  )
}

export default tableRow;