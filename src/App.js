import {React, useState,useEffect} from 'react';
import './App.css';
import FormComponent from './formComponent';
import AllUsersComponent from './allUsersComponent';

function App() {

  const [users, setUsers] = useState([]);

    useEffect(() =>{
            fetch('api/user')
            .then(response => response.json())
            .then(data => setUsers(data))
    },[])

  return (
    <div className="App">
      <div className='form'>
      <FormComponent onSubmit = {setUsers}/>
      </div>
      <div className='users'>
      <AllUsersComponent users = {users} />
      </div>
    </div>
  );
}

export default App;
