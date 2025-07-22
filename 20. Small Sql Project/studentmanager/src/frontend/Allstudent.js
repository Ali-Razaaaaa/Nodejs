import React from 'react'
import { useEffect, useState } from 'react';
function Allstudent() {
    const [student,allstudent]=useState([]);
      
      useEffect(()=>
      {
        fetch('http://localhost:3000/all')
          .then(res => res.json())
          .then(data => allstudent(data))
          .catch(error => {
            console.error('Error:', error);
             allstudent([{ error: 'Error Receiving' }]);
          });
      },[]);
  return (
     <div>
        <h1>All Students List</h1>
        <ul>
          {
            student.map((item,index)=>(
              <li key={index}>
                Name:{item.name},
                Email:{item.email},
                Age:{item.age}
              </li>
            ))
          }
        </ul>
      </div>
  );
}

export default Allstudent