import React, { useState, useEffect } from 'react'

function Usr() {

    const[ usersdata, setusersdata] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();

            })

            .then(data => {
                console.log(data);
                setusersdata(data);
            })

    })
  return (
    <div>

<table cellPadding={10} cellSpacing={0} border={1}>
        <tr>
         <th>No</th>
         <th>Name</th>
         <th>username</th>
         <th>email</th>
         <th>phone</th>
         <th>address</th>
         <th>company</th>
         <th>website</th>
        
        </tr>
        {
          usersdata.map((item) =>{
            return(
              <>
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.address.street}</td>
                <td>{item.company.name}</td>
                <td>{item.website}</td>
                
              </tr>
              </>
            )
              
                
            
          })
        }
      </table>
      
      
    </div>
  )
}

export default Usr
