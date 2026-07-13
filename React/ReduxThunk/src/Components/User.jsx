import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import userSlice from '../redux/userSlice';
import { fetchUserMiddleware } from '../middleware/userMiddleware';
const actions = userSlice.actions;
function User() {
  const {user,error,loading,param} = useSelector((store) => store.userState);
  const [value, setValue] = useState(1);
  const dispatch = useDispatch();

  const handleParam = () => {
    dispatch(actions.setParam(value));
  }

  useEffect(() => {
    if(param!=null){
      dispatch(fetchUserMiddleware(param));
    }
  },[param]);

  const heading = <h2>User Data</h2>;
  if(loading){
    return <>{heading}
    <h2>...Loading</h2></>
  }

  if(error){
    return <>{heading}
    <h2>Error occured</h2></>
  }

  
  return (
    <>
    {heading}
    <input type="text" placeholder='Enter User ID' onChange={(e) => setValue(e.target.value)} value={value}></input>
    <button onClick={handleParam}>Send Param</button>
    <h2>{user?.name}</h2>
    <h2>{user?.phone}</h2>
    </>
  )
}

export default User
