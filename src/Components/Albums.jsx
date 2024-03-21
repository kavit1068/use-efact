import React, { useState, useEffect } from 'react'

function Albums() {

    const[ albumsdata, setalbumsdata] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => {
                return response.json();

            })

            .then(data => {
                console.log(data);
                setalbumsdata(data);
            })

    })
  return (
    <>
    <table cellPadding={10} cellSpacing={0} border={1}>
        <tr>
         <th>No</th>
         <th>title</th>
         
        </tr>
        {
          albumsdata.map((item) =>{
            return(
              <>
              <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                
              </tr>
              </>
            )
              
                
            
          })
        }
      </table>
  
    </>
  )
}

export default Albums
