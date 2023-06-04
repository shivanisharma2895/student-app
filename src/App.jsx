import { useEffect, useState } from 'react';
import './App.css'
import { User } from './components/student'

// when exporting as default
// import Student from './components/student';

function App() {

  // useState react hook
  const [usersData, setUsersData] = useState([]);

  // useEffect react hook
  // call all the functions which needs to be called on component load
  useEffect(()=>{
    getUsersData();
  },[]);

  async function getUsersData(){
    const API_URL = 'https://dummyjson.com/users';
    const res = await fetch(API_URL);
    const data = await res.json();
    setUsersData(data.users);
  }


  return (
    <div className='student-list'>
      {usersData.map((user, index) => {
        return <User image={user.image} key={index} />
      })}
    </div>
  )
}

export default App
