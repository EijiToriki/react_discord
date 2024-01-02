import React from 'react'
import "./ChatMessage.scss"
import {Avatar} from "@mui/material"

function ChatMessage() {
  return (
    <div className='message'>
      <Avatar />
      <div className='messageInfo'>
        <h4>
          Eiji Toriki
          <span className='messageTimestamp'>2024/01/02</span>
        </h4>
        <p>メッセージ本文</p>
      </div>
    </div>
  )
}

export default ChatMessage