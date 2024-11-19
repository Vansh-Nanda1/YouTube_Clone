import React from 'react'
import usericon from "../assets/user.icon.jpg";
const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-md p-2'>
         <img src={usericon} alt="usericon" className="w-10" />
         <span className='font-bold px-2 '>{name}</span>
         <span>{message}</span>
    </div>
  )
}

export default ChatMessage