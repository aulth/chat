const data = [
    {
        name:'Mohd Usman',
        id:'user-1',
        dp:'https://mui.com/static/images/avatar/1.jpg',
        lastSeen: '2:00 AM today',
        chats:[
            {
                id: 'user-2',
                messages:[
                    {
                        id:'message-1',
                        time:'1:00AM',
                        content: 'Hey, How are you?',
                        received:true,
                        seen:false,
                        sent:false,
                    },
                    {
                        id:'message-2',
                        time:'1:01AM',
                        content:'I am good, what about you?',
                        seen:true,
                        received:false,
                        sent:true,
                    },
                    {
                        id:'message-3',
                        time:'1:02AM',
                        content:'Aftab is equiavlent to Johny Sins.',
                        seen:false,
                        received:true,
                        sent:false,
                    }
                ]
            },
            {
                id: 'user-3',
                messages:[
                    {
                        id:'message-4',
                        time:'11:00AM',
                        content: 'Hey, have you submitted the report?',
                        seen:false,
                        received:true,
                        sent:false,
                    },
                    {
                        id:'message-5',
                        time:'11:05AM',
                        content:'Not yet, will try by tomarrow',
                        seen:true,
                        received:false,
                        sent:true,
                    },
                    {
                        id:'message-6',
                        time:'11:06AM',
                        content:'Okay!',
                        seen:false,
                        received:true,
                        sent:false,
                    }
                ]
            },
            {
                id: 'user-4',
                messages:[
                    {
                        id:'message-7',
                        time:'11:00AM',
                        content: 'Hey, Whats up?',
                        seen:false,
                        received:true,
                        sent:false,
                    },
                    {
                        id:'message-8',
                        time:'12:05AM',
                        content:'Doing nice!',
                        seen:true,
                        received:false,
                        sent:true,
                    },
                    {
                        id:'message-9',
                        time:'12:08AM',
                        content:'Great!',
                        seen:false,
                        received:true,
                        sent:false,
                    }
                ]
            }
        ]
    },
    {
        name:'John Doe',
        id:'user-2',
        dp:'https://lh3.googleusercontent.com/ogw/AAEL6sgW7jgODhKe2ubDHGDqHgV2OFU31t5-gYfEssUDSg=s64-c-mo',
        lastSeen: '2:05 AM today',
        chats:[
            {
                id: 'user-1',
                messages:[
                    {
                        id:'message-1',
                        time:'1:00AM',
                        content: 'Hey, How are you?',
                        seen:true,
                        received:false,
                        sent:true,
                    },
                    {
                        id:'message-2',
                        time:'1:01AM',
                        content:'I am good, what about you?',
                        seen:false,
                        received:true,
                        sent:false,
                    },
                    {
                        id:'message-3',
                        time:'1:02AM',
                        content:'I am good too!',
                        seen:true,
                        received:false,
                        sent:true,
                    }
                ]
            },
        ]
    },
    {
        name:'Newton',
        id:'user-3',
        dp:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7xcd5ZhCYFD-O4xXAkIQvSIxNim3LIwZo5fqqyfht&s',
        lastSeen: '2:05 AM yesterday',
        chats:[
            {
                id: 'user-1',
                messages:[
                    {
                        id:'message-1',
                        time:'1:00AM',
                        content: 'Hey, How are you?',
                        seen:false,
                        received:false,
                        sent:true,
                    },
                    {
                        id:'message-2',
                        time:'1:01AM',
                        content:'I am good, what about you?',
                        seen:false,
                        received:true,
                        sent:false,
                    },
                    {
                        id:'message-3',
                        time:'1:02AM',
                        content:'I am good too!',
                        seen:true,
                        received:false,
                        sent:true,
                    }
                ]
            },
        ]
    },
    {
        name: "Einstien",
        id:'user-4',
        dp:'https://free-profile-pics.com/images/albert-einstein-profile-picture.png',
        lastSeen: 'a long time ago',
        chats:[
            {
                id: 'user-1',
                messages:[
                    {
                        id:'message-10',
                        time:'1:00AM',
                        content: 'Hey, How are you?',
                        seen:false,
                        received:false,
                        sent:true,
                    },
                    {
                        id:'message-11',
                        time:'1:01AM',
                        content:'I am good, what about you?',
                        seen:false,
                        received:true,
                        sent:false,
                    },
                    {
                        id:'message-2',
                        time:'1:02AM',
                        content:'I am good too!',
                        seen:true,
                        received:false,
                        sent:true,
                    }
                ]
            },
        ]
        
    }
]
export default data;
