import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { auth } from '../firebase'

/**
* @author
* @function Navbar
**/

export const Navbar = () => {
  const {currentUser}=useContext(AuthContext);
  return(
    <div className='navbar'>
      <span className="logo">CHAT Chat</span>
      <div className="user">
       <img src={currentUser.photoURL} alt='img'></img>
       
        <span>{currentUser.displayName}</span>
      <button onClick={()=>signOut(auth)} >logout</button>
      </div>
    </div>
   )

 }