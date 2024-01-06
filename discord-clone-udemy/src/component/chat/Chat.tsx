import React, { useState } from 'react'
import "./Chat.scss"
import ChatHeader from './ChatHeader'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ChatMessage from './ChatMessage';
import { useAppSelector } from '../../app/hooks';
import { CollectionReference, DocumentData, DocumentReference, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import useSubCollection from '../../hooks/useSubCollection';

function Chat() {
  const [inputText, setInputText] = useState<string>("")
  const channelName = useAppSelector((state) => state.channel.channelName)
  const channelId = useAppSelector((state) => state.channel.channelId)
  const user = useAppSelector((state) => state.user.user)
  const {subDocuments: messages} = useSubCollection("channels", "messages")

  const sendMessage = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const collectionRef: CollectionReference = collection(db, "channels", String(channelId), "messages")
    await addDoc(collectionRef, {
      message: inputText,
      timestamp: serverTimestamp(),
      user: user
    })
    setInputText("")
  }

  return (
    <div className='chat'>
      {/* chat header */}
      <ChatHeader channelName={channelName} />
      {/* chat message */}
      <div className='chatMessage'>
        {messages.map((message, idx) => (
          <ChatMessage key={idx} message={message.message} timestamp={message.timestamp} user={message.user} />
        ))}
      </div>
      {/* chat input */}
      <div className='chatInput'>
        <AddCircleOutlineIcon />
        <form>
          <input type="text" placeholder={'#'+ channelName +'へメッセージを送信'} value={inputText} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)}/>
          <button type='submit' className='chatInputButton' onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => sendMessage(e)}>
            送信
          </button>
        </form>
        <div className="chatInputIcons">
          <CardGiftcardIcon />
          <GifIcon />
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  )
}

export default Chat