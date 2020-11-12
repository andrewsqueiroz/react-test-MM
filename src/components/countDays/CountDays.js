import React, { useEffect } from 'react';

import './style.css';

const CountDays = (props) => {
    const [msg, setMsg] = React.useState('');
    const [days, setDays] = React.useState('...');
    const [hours, setHours] = React.useState('...');
    const [minutes, setMinutes] = React.useState('...');
    const [seconds, setSeconds] = React.useState('...');

    useEffect(() => {
        const timeLimit = new Date("10, 30, 2022, 00:00:00").getTime();
        const count = setInterval(function() {
            let dateNow = new Date().getTime();
            let diference = timeLimit - dateNow;
    
            if (diference < 0) {
                clearInterval(count);
                setMsg('Square will be launched anytime')
                setDays('0')
                setHours('0')
                setMinutes('0')
                setSeconds('0')
            } else {
                setMsg('')
                setDays(Math.floor(diference / (1000 * 60 * 60 * 24)))
                setHours(Math.floor((diference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
                setMinutes(Math.floor((diference % (1000 * 60 * 60)) / (1000 * 60)))
                setSeconds(Math.floor((diference % (1000 * 60)) / 1000))
            }
        }, 1000);

        return () => {
            clearInterval(count);
        };
    }, [])

    return (
        <>
            <div className='countContainer'>
                <div className="countItem">
                    <span className="countNumber">{days}</span> 
                    <span>Days</span>
                </div>

                <div className="countItem">
                    <span className="countNumber">{hours}</span> 
                    <span>Hours</span>
                </div>

                <div className="countItem">
                    <span className="countNumber">{minutes}</span> 
                    <span>Minutes</span>
                </div>

                <div className="countItem">
                    <span className="countNumber">{seconds}</span> 
                    <span>Seconds</span>
                </div>
            </div>
           
            <div className='countContainer'> {msg} </div>
        </>
    )
}

export default CountDays;