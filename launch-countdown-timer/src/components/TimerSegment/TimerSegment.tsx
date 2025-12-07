import { useEffect, useState } from "react";

type TimerSegmentProps = {
    value: number;
    label: string;
};

const TimerSegment = ({ value, label }: TimerSegmentProps) => {
    const [current, setCurrent] = useState(value);

    useEffect(() => {
        setCurrent(value);
    }, [value]);

    const format = (num: number) => (num < 10 ? `0${num}` : `${num}`);

    return (
        <div className="flex flex-col items-center">
            <div className="w-[70px] h-[66.26px] sm:w-[148px] sm:h-[140px] relative flex items-center justify-center bg-[#343650] text-[#FB5E84] text-[36px] sm:text-[80px] font-bold rounded-lg shadow-[0_10px_#191A23] overflow-hidden">
                <div className="w-[148px] h-[33px] sm:h-[70px] bg-[#000000] opacity-25 absolute top-0 rounded-t-lg"></div>

                <div className="w-1.5 sm:w-3 h-1.5 sm:h-3 bg-[#191A23] rounded-2xl absolute left-[68px] sm:-left-1.5"></div>
                <div className="w-1.5 sm:w-3 h-1.5 sm:h-3 bg-[#191A23] rounded-2xl absolute right-[68px] sm:-right-1.5"></div>

                <div className="mb-[3px] sm:mb-2.5">
                    {format(current)}
                </div>
            </div>

            <p className="text-[#8385A9] text-[7px] sm:text-[14px] tracking-[5.92px] font-bold mt-4">{label}</p>
        </div>
    );
};

export default TimerSegment;