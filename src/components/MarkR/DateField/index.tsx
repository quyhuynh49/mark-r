import React, { useState, useRef } from 'react'
import DropdownIcon from '../../icons/DropdownIcon';

function Index() {
    const ref = useRef<HTMLInputElement>(null);

    return (
        <div className='relative w-full h-full bg-[#F2F7FF] rounded-[15px] p-[10px]'>
            <div className='flex justify-between items-center'>
                <div className='font-sst font-[700] text-[14px] text-[#003C71]'>Reg. Approval Date</div>
                <DropdownIcon />
            </div>
            <input
                type="date" ref={ref} onChange={(e) => console.log(e.target.value)}
            />
        </div>
    )
}

export default Index
