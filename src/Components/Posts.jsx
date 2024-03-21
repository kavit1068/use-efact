import React, { useState, useEffect } from 'react'

function Posts() {

    const[ postdata, setpostdata] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                return response.json();

            })

            .then(data => {
                console.log(data);
                setpostdata(data);
            })

    })
  return (
    <>
         <table cellPadding={10} cellSpacing={0} border={1}>
        <tr>
         <th>No</th>
         <th>Titel</th>
         <th>Body</th>
         
        </tr>
        {
          postdata.map((item) =>{
            return(
              <>
              <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
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

export default Posts
