import React from 'react'
import { Avatar } from '@mui/material'
import {blue, orange } from '@mui/material/colors'
import TelegramIcon from '@mui/icons-material/Telegram';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
const SendMessageInput = () => {
    return (
        <div className="w-full flex items-center justify-between h-12 p-2 absolute bottom-0 bg-gray-100 ">
            <div className="w-full flex items-center bg-white rounded-l-full rounded-r-full">
                <div className='p-1'>
                    <Avatar sx={{ bgcolor: orange[400] }}>
                        <SentimentVerySatisfiedIcon className='p-0.5' />
                    </Avatar>
                </div>
                <textarea placeholder='Message..' className='w-full focus:outline-none px-1 box-border pt-1 h-9'></textarea>
                <div className="p-1">
                    <Avatar sx={{ bgcolor: blue[400] }}>
                        <TelegramIcon className='p-0.5' />
                    </Avatar>
                </div>
            </div>
        </div>
    )
}

export default SendMessageInput