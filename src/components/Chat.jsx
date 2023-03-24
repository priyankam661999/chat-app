import React, { useContext } from 'react';
import Cam from '../img/cam.png';
import More from '../img/more.png';
import Add from '../img/add.png';
import { Messages } from './Messages';
// import { Input } from './Input';
import { Input } from './Input';
import { ChatContext } from '../context/ChatContext';
/**
* @author
* @function Chat
**/

export const Chat = () => {

  const {data}=useContext(ChatContext);
  return(
    <div className='chat'>
        <div className='chatInfo'>
            <span>{data.user?.displayName}</span>
            <div className='chatIcons'>
                <img src={Cam} alt='img'></img>
                <img  src={Add} alt='img' ></img>
                <img src={More} alt='img'></img>
            </div>
         
        </div>
        <Messages></Messages>
        <Input></Input>
    </div>
   )

 }