import React, { useEffect, useState } from 'react'

const GreetUser = () => {
    const [greet, setGreet] = useState('Good Morning!');
    const fetchTime = () => {
        setInterval(() => {
            let time = new Date().getHours();
            if (time < 12) {
                setGreet('Good Morning!');
            } else if (12 <= time <= 17) {
                setGreet('Good Afternoon!');
            } else if (17 <= time <= 20) {
                setGreet('Good Evening!');
            } else {
                setGreet('Good Night!');
            }
        }, 60000);
    };
    useEffect(() => {
        fetchTime();
    }, [])

    return (
        <p className="text-gray-500 text-sm">{greet}</p>
    )
}

export default GreetUser