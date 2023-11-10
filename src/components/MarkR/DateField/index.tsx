import { MutableRefObject, useRef, useState } from 'react';
import CalendarIcon from '../../icons/CalendarIcon';
import './index.css';

type DateFieldProps = {
    title: string;
}

function Index({ title }: DateFieldProps) {
    const ref = useRef() as MutableRefObject<HTMLInputElement>;
    const [dateValue, setDateValue] = useState('');

    const handleOnFocus = () => {
        ref.current.type = 'date';
        try {
            ref.current.showPicker();
        } catch (error) {
            /* Fall back to another picker mechanism */
        }
    }

    const handleOnBlur = () => {
        if (dateValue.length === 0) ref.current.type = 'text';
    }

    const handleOnClickCalendarIcon = () => {
        ref.current.type = 'date';
        try {
            ref.current.showPicker();
        } catch (error) {
            /* Fall back to another picker mechanism */
        }
    }

    return (
        <div className='relative w-full h-full bg-[#F2F7FF] rounded-[15px] p-[10px]'>
            <div className='flex justify-between items-center'>
                <div className='font-sst font-[700] text-[14px] text-[#003C71]'>{title.toUpperCase()}</div>
                <button onClick={handleOnClickCalendarIcon}>
                    <CalendarIcon />
                </button>
            </div>

            <input
                className='hover:cursor-pointer placeholder:text-[#9AC2FE] text-[#9AC2FE] font-[500] font-sst bg-[#F2F7FF] focus:outline-none'
                type="text" ref={ref}
                placeholder='Select Date'
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                value={dateValue}
                onChange={(e) => setDateValue(e.target.value)}
            />
        </div>
    )
}

export default Index
