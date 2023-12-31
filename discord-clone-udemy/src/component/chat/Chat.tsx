import React from 'react'
import "./Chat.scss"
import ChatHeader from './ChatHeader'

function Chat() {
  return (
    <div className='chat'>
      {/* chat header */}
      <ChatHeader />
      {/* chat message */}
      <div className='chatMessage'>
        
      </div>
      {/* chat input */}
      <div className='chatInput'>
        
      </div>
    </div>
  )
}

export default Chat