import React from 'react'
import './allUsersComponent.css';


export default function AllUsersComponent({users}) {
   
  return (
    <div className='all-users'>
        <table>
             <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Age</th>
             </tr>
        {users.map((user, index) => {
            const firstName = user.firstname;
            const lastName = user.lastname;
            const email = user.email;
            const age = user.age;
            const itemKey = index;
            
            return(
                        <tr>
                            <td>{firstName}</td>
                            <td>{lastName}</td>
                            <td>{email}</td>
                            <td>{age}</td>
                        </tr>
                    
            )
        })
        } 
        </table>
    </div> 
    )
        
}
