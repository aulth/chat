import React from 'react'
import { Avatar} from '@mui/material'
import {grey} from '@mui/material/colors'
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const ChatHeader = ({data}) => {
    return (
        <div className="w-full flex justify-between items-center p-2 border-b h-14 border-gray-300">
            <div className="flex items-center">
                <Avatar src={data?.dp} alt='userProfile' />
                <div className="flex flex-col items-start justify-around mx-2">
                    <h5 className="text-700 font-semibold text-sm">{data?.name}</h5>
                    <p className="text-gray-500 text-sm">{data?.lastSeen}</p>
                </div>
            </div>
            <div className="flex items-center">
                <Avatar sx={{ bgcolor: grey[200] }}>
                    <SearchIcon sx={{ color: grey[400] }} className="p-1" />
                </Avatar>
                <Avatar sx={{ bgcolor: grey[200] }} className="mx-2">
                    <AddIcCallIcon sx={{ color: grey[400] }} className="p-1" />
                </Avatar>
                <Avatar sx={{ bgcolor: grey[200] }}>
                    <MoreVertIcon sx={{ color: grey[400] }} className="p-1" />
                </Avatar>
            </div>
        </div>
    )
}

export default ChatHeader