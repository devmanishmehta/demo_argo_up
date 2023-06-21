import { useEffect, useState } from "react";

function getRemainingTime(targetDate: any) {
    const timeRemaining = Date.parse(targetDate) - Date.now();
    const seconds = Math.floor((timeRemaining / 1000) % 60);
    const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
    const hours = Math.floor((timeRemaining / 1000 / 60 / 60) % 24);
    const days = Math.floor(timeRemaining / 1000 / 60 / 60 / 24);

    function pad(num: number) {
        return num < 10 ? `0${num}` : num;
    }

    return {
        days: pad(days),
        hours: pad(hours),
        minutes: pad(minutes),
        seconds: pad(seconds),
    };
}

const CountDown = ({ targetDate }: { targetDate: string }) => {
    const [remainingTime, setRemainingTime] = useState<any>({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
    });


    useEffect(() => {
        const intervalId = setInterval(() => {
            setRemainingTime(getRemainingTime(targetDate));
        }, 1000);

        return () => clearInterval(intervalId);
    }, [targetDate]);

    return (
        <div suppressHydrationWarning={false} className="countdown">
            <div className="countdown_item" ><span>{remainingTime.days}</span> Days</div>
            <div className="countdown_item" ><span>{remainingTime.hours}</span> Hours</div>
            <div className="countdown_item" ><span>{remainingTime.minutes}</span> Minutes</div>
            <div className="countdown_item" ><span>{remainingTime.seconds}</span> Seconds</div>
        </div>
    );
}


export default CountDown;