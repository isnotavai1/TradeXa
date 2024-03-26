import {createContext, useState, useEffect} from 'react'
import Chatbuuble from './Chatbuuble'
import Chatsearch from './Chatsearch'
export const chatContext = createContext();

const Chat = () => {
  const [chat, setChat] = useState(["dknd", "gfjnf", "fijj"]);
  console.log(chat);
    const addChat = (message) => {
      const updatedChat = chat;
      updatedChat.push(message);
      setChat(updatedChat);
      console.log(chat);
  }

  return (
    <chatContext.Provider value = {{setChat, chat, addChat}}>
      <div style={{padding:"20px 10px"}}>
          <h1 className='text-2xl text-center mb-4'>Ask your queries</h1>
          <Chatbuuble />
          <div style={{position:"fixed", bottom:"10vh", width:"100vw"}}>
              <Chatsearch />
          </div>
      </div>
    </chatContext.Provider>
  )
}

export default Chat
