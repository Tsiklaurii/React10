import { useEffect, useState } from "react";
import TimerSegment from "../TimerSegment/TimerSegment";

const Timer = () => {
    const [totalSeconds, setTotalSeconds] = useState(
        8 * 24 * 60 * 60 + // 8 დღე
        23 * 60 * 60 +     // 23 საათი
        55 * 60 +          // 2 წუთი
        41                 // 5 წამი
    );

    useEffect(() => {
        if (totalSeconds <= 0) return;

        const interval = setInterval(() => {
            setTotalSeconds((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [totalSeconds]);

    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    return (
        <div className="flex sm:gap-8 gap-4">
            <TimerSegment value={days} label="DAYS" />
            <TimerSegment value={hours} label="HOURS" />
            <TimerSegment value={minutes} label="MINUTES" />
            <TimerSegment value={seconds} label="SECONDS" />
        </div>
    );
};

export default Timer;