import React, { useState , useEffect} from 'react'
import SentMessage from 'components/home/SentMessage'
import ReceivedMessage from 'components/home/ReceivedMessage'
import SendMessageInput from 'components/home/SendMessageInput'
import ChatHeader from 'components/home/ChatHeader'
import data from './../../data'
const ChatScreen = ({sender, recevier, allChat}) => {
    const [recevierData, setRecevierData] = useState();
    const [messages, setMessages] = useState();
    useEffect(() => {
        setRecevierData(data.filter(item => item.id == recevier)[0]);
        allChat && setMessages(allChat.filter(item => item.id == recevier)[0].messages);
    }, [recevier, allChat])
    
    return (
        <div className='w-full md:block hidden h-[calc(100vh-1rem-1rem)] border-r border-r-gray-300 relative'>
            <ChatHeader data={recevierData}/>
            <div className='p-2 bg-gray-100 flex flex-col gap-2 w-full h-[calc(100vh-1rem-1rem-3.5rem-3rem)] overflow-y-auto'>
                {
                    messages && messages.length>0 && sender && recevierData &&
                    messages.map((item, index)=>{
                        if(item.received){
                            return <ReceivedMessage data={item} receiver={recevierData} />
                        }else{
                            return <SentMessage data={item} sender={sender} />
                        }
                    })
                }
            </div>
            <SendMessageInput />
        </div>
    )
}

export default ChatScreen