import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

function Users(props) {
    console.log(props.isAdmin);
    const [user,setUser] = useState(null);
    let params = useParams();
    console.log(params);
    
    const userID = params.id;
    const userName = params.name;
    const userAge = params.age;
    console.log(userName, userAge);
    useEffect(() => {
        const fetchUser = async() => {
            const response = await fetch(`https://fakestoreapi.com/users/${userID}`);
            const userData = await response.json();
            setUser(userData);
        }
        fetchUser();
    }, [])
  return (
    <div>
        <h1>i am a user component</h1>
        {user == null ? <p>Loading...</p> : 
        <>
        <h2>User Name : {user.username}</h2>
        <h2>User Email : {user.email}</h2>
        <h2>User Password : {user.password}</h2>
        </>
        }
    </div>
  )
}

export default Users
