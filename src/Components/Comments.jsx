import React, { useState, useEffect } from 'react'

function Comments() {

    const[ Commentdata, setCommentdata] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => {
                return response.json();

            })

            .then(data => {
                console.log(data);
                setCommentdata(data);
            })

    })
    return (
        <>
        <table cellPadding={10} cellSpacing={0} border={1}>
        <tr>
         <th>No</th>
         <th>Name</th>
         <th>Email</th>
         <th>Body</th>
        </tr>
        {
          Commentdata.map((item) =>{
            return(
              <>
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.body}</td>
              </tr>
              </>
            )
              
                
            
          })
        }
      </table>

        </>
    )
}

export default Comments
