import React from 'react'
import { Chat } from '../components/Chat'
import { Sidebar } from '../components/Sidebar'

/**
* @author
* @function Home
**/

export const Home = () => {
  return(
    <div className='home'>
        <div className='container'>
        <Sidebar></Sidebar>
        <Chat></Chat>
</div>
    </div>
   )

 }