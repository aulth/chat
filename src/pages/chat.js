import React from 'react'
import styles from '@/styles/Home.module.css'
import ChatScreen from 'components/home/ChatScreen'
const Chat = () => {
  return (
    <main className={styles.main}>
        <div className="w-full h-[calc(100vh-1rem)] rounded-lg p-2 bg-gray-100 box-border">
          <div className="w-full flex h-[calc(100vh-1rem-1rem)] rounded bg-white box-border">
            <ChatScreen/>
          </div>
        </div>
      </main>
  )
}

export default Chat