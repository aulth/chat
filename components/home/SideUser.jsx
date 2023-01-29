import React, { useState , useEffect} from 'react'
import { Avatar, Badge } from '@mui/material'
const SideUser = ({setChatOpen, id, data, allChat}) => {
    const [lastMessage, setLastMessage] = useState();
    const [unseenMessageCount, setUnseenMessageCount] = useState(0);
    useEffect(() => {
      let lastChat = allChat.filter(item => item.id == id)[0].messages;
      setUnseenMessageCount(lastChat.filter(item => !item.seen).length);
      setLastMessage(lastChat[lastChat.length-1]);
    }, [])
    
    return (
        <div onClick={()=>{setChatOpen(id)}} className={`w-full flex justify-between items-center hover:bg-slate-200 duration-75 cursor-pointer p-2 rounded side-user side-user ${id}`}>
            <div className={`flex items-center `}>
                <Avatar src={data.dp} />
                <div className="flex flex-col items-start justify-around ml-2">
                    <h6 className="font-semibold text-sm">{data.name}</h6>
                    <p className="text-sm">{lastMessage && lastMessage.content}</p>
                </div>
            </div>
            <div className="flex flex-col items-end justify-around">
                <p className="text-sm">{lastMessage && lastMessage.time}</p>
                <div>
                    <Badge badgeContent={unseenMessageCount && unseenMessageCount} color="success" className='mr-2.5' />
                </div>
            </div>
        </div>
    )
}

export default SideUser