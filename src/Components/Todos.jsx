import React, { useState, useEffect } from 'react'

function Todos() {


    const[ todosdata, settodosdata] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                return response.json();

            })

            .then(data => {
                console.log(data);
                settodosdata(data);
            })

    })
  return (
    <>
         <table cellPadding={10} cellSpacing={0} border={1}>
        <tr>
         <th>No</th>
         <th>Titel</th>
         <th>completed</th>
        
        </tr>
        {
          todosdata.map((item) =>{
            return(
              <>
              <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.completed}</td>
                
              </tr>
              </>
            )
              
                
            
          })
        }
      </table>
      
    </>
  )
}

export default Todos
