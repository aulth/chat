import React from 'react'
import { Avatar } from '@mui/material'
const SentMessage = ({sender, data}) => {
    return (
        <div className="p-2  flex flex-col items-end">
            <div className="flex">
                <div className="flex flex-col items-end justify-around mr-2">
                    <h5 className="text-700 font-semibold text-xs">You</h5>
                    <p className="text-gray-500 text-xs">{data?.time}</p>
                </div>
                <Avatar src={sender?.dp} sx={{ width: 32, height: 32 }} />
            </div>
            <div className="flex flex-col gap-2 mt-2">
                <div>
                    <div className="p-1 rounded-l-full px-3 rounded-br-full bg-white inline-block">{data?.content}</div>
                </div>
            </div>
        </div>

    )
}

export default SentMessage