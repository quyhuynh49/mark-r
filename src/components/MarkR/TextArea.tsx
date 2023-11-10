import clsx from 'clsx';
import React from 'react'

type TextAreaProps = {
    className?: string;
    title: string;
    placeholder: string;
}

export default function TextArea({ className, title, placeholder }: TextAreaProps) {
    return (
        <div className={clsx(className, 'w-full h-full bg-[#F2F7FF] rounded-[15px] p-[10px]')}>
            <div className='font-sst font-[700] text-[14px] text-[#003C71]'>
                {title.toUpperCase()}
            </div>
            <textarea placeholder={placeholder} className='placeholder:text-[#9AC2FE] placeholder:font-[500] placeholder:text-[16px] bg-[#F2F7FF] h-[calc(100%-20px)] w-full resize-none focus:outline-none' />
        </div>
    )
}
