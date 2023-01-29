import React, { useEffect , useState } from 'react'
import { Avatar } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { grey } from '@mui/material/colors'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import SideUser from 'components/home/SideUser';
import data from './../../data';
import GreetUser from './GreetUser';
const ChatSideBar = ({ setIsChatOpen, sideUsers, allChat, setReceiver, user }) => {
    const [sideUsersData, setSideUsersData] = useState();
    const setChatOpen = (id) => {
        if (typeof window !== 'undefined') {
            let allSideUser = document.querySelectorAll('.side-user');
            for (let user of allSideUser) {
                user.classList.remove('bg-slate-200');
            }
            setReceiver(id);
            document.querySelector(`.${id}`).classList.add('bg-slate-200');
        }
        setIsChatOpen(true)
    };
    useEffect(() => {
        let response = data.filter((item)=>{
            let flag = false;
            sideUsers && sideUsers.forEach(id => {
                if(id == item.id){
                    flag = true;
                }
            });
            return flag;
        });
        setSideUsersData(response);
    }, [sideUsers])
    return (
        <div className='md:w-[500px] w-full h-[calc(100vh-1rem-1rem)] border-r border-r-gray-300'>
            <div className="w-full flex justify-between items-center p-2 border-b h-14 border-gray-300">
                <div className="flex items-center">
                    <Avatar src={user?.dp} alt='userProfile' />
                    <div className="flex flex-col items-start justify-around mx-2">
                        <GreetUser/>
                        <h5 className="text-700 font-semibold text-sm">{user?.name}</h5>
                    </div>
                </div>
                <div className="flex items-center">
                    <Avatar sx={{ bgcolor: grey[200] }}>
                        <AddIcon sx={{ color: grey[400] }} className="p-1" />
                    </Avatar>
                    <Avatar sx={{ bgcolor: grey[200] }} className="mx-1">
                        <NotificationsIcon sx={{ color: grey[400] }} className="p-1" />
                    </Avatar>
                    <Avatar sx={{ bgcolor: grey[200] }}>
                        <SearchIcon sx={{ color: grey[400] }} className="p-1" />
                    </Avatar>
                </div>
            </div>
            <div className='p-2 flex flex-col gap-2 h-[calc(100vh-1rem-1rem-3.5rem)] overflow-y-auto'>
                {
                    sideUsersData && sideUsersData.length>0 &&
                    sideUsersData.map((data)=>{
                        return <SideUser key={data.id} data={data} setChatOpen={setChatOpen} id={data.id} allChat={allChat} />
                    })
                }
            </div>
        </div>
    )
}

export default ChatSideBar