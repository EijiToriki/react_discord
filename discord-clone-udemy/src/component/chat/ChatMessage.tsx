import React from 'react'
import "./ChatMessage.scss"
import {Avatar} from "@mui/material"
import { useAppSelector } from '../../app/hooks'

const ChatMessage = () => {
  const user = useAppSelector((state) => state.user)

  return (
    <div className='message'>
      <Avatar />
      <div className='messageInfo'>
        <h4>
          {user?.displayName}
          <span className='messageTimestamp'>2024/01/02</span>
        </h4>
        <p>メッセージ本文</p>
      </div>
    </div>
  )
}

export default ChatMessage