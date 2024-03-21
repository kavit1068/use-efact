import React, { useState, useEffect } from 'react'

function Photos() {

    const[ photosdata, setphotosdata] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => {
                return response.json();

            })

            .then(data => {
                console.log(data);
                setphotosdata(data);
            })

    })
  return (
    <>
     <table cellPadding={10} cellSpacing={0} border={1}>
        <tr>
         <th>No</th>
         <th>Titel</th>
         <th>url</th>
         <th>thumbnailUrl</th>
        </tr>
        {
          photosdata.map((item) =>{
            return(
              <>
              <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.url}</td>
                <td>{item.thumbnailUrl}</td>
              </tr>
              </>
            )
              
                
            
          })
        }
      </table>

      
    </>
  )
}

export default Photos
