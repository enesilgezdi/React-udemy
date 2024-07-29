import { useEffect, useState } from "react"

export default function QuestionTimer({ timeout, onTimeout, mode }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        console.log('SETTİNG TIMEOUT')
        const timer = setTimeout(onTimeout, timeout);

        return () => {
            clearTimeout(timer);
        };

    }, [timeout, onTimeout]);

    useEffect(() => {
        console.log('SETTİNG INTERVAL')
        const interval = setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 100)
        }, 100)

        return () => {
            clearInterval(interval);
        };
    }, []);


    return <progress id="question-time" max={timeout} value={remainingTime} className={mode} />
}