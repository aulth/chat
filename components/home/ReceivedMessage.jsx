import React from 'react'
import { Avatar } from '@mui/material'
const SentMessage = ({receiver, data}) => {
    return (
        <div className="p-2 ">
            <div className="flex">
                <Avatar src={receiver?.dp} sx={{ width: 32, height: 32 }} />
                <div className="flex flex-col items-start justify-around ml-2">
                    <h5 className="text-700 font-semibold text-xs">{receiver && receiver.name}</h5>
                    <p className="text-gray-500 text-xs">{data?.time}</p>
                </div>
            </div>
            <div className="flex flex-col gap-2 mt-2">
                <div>
                    <div className="p-1 rounded-r-full px-3 rounded-bl-full bg-white inline-block">{data?.content}</div>
                </div>
            </div>
        </div>

    )
}

export default SentMessage