import React, { useState } from 'react'
import DropdownIcon from '../../icons/DropdownIcon'

import { MAMUFACTURING_SITE } from '../../../data/mockup';

export default function Index() {
    const [isDropdownDisplayed, setIsDropdownDisplayed] = useState(false);
    const [selectedDataFields, setSelectedDataFields] = useState<Record<string, boolean>>(
        MAMUFACTURING_SITE.reduce((obj, datafield) => ({ ...obj, [datafield.data_field_1]: false }), {})
    )


    return (
        <div className='relative w-full h-full bg-[#F2F7FF] rounded-[15px] p-[10px]'>
            <div className='flex justify-between items-center'>
                <div className='font-sst font-[700] text-[14px] text-[#003C71]'>UPN/US OUS</div>
                <DropdownIcon />
            </div>
            <button
                onClick={() => setIsDropdownDisplayed(preState => !preState)}
                className='font-sst font-[500] text-[16px] text-[#9AC2FE]'>
                Select
            </button>

            {isDropdownDisplayed && (
                <div className='absolute w-[180%] border border-solid border-[#999999] bg-[#ffffff] shadow-lg p-[10px]'>
                    {MAMUFACTURING_SITE.map(datafield => {
                        return (
                            <div key={datafield.data_field_1} className='flex gap-[10px] items-center'>
                                <input
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSelectedDataFields({
                                        ...selectedDataFields,
                                        [datafield.data_field_1]: event.target.checked
                                    })}
                                    checked={selectedDataFields[datafield.data_field_1]}
                                    id={`input-${datafield.data_field_1}`}
                                    type="checkbox" />
                                <label className='font-sst font-[700]' htmlFor={`input-${datafield.data_field_1}`}>{datafield.data_field_1}</label>
                            </div>
                        )
                    })}
                    <div className='flex justify-end gap-[10px]'>
                        <button className=' bg-[#BB33FF] text-[#ffffff] px-[16px] border rounded-[30px] font-sst font-[700] py-[6px]'>CONFIRM</button>
                        <button className='bg-[#ffffff] text-[#BB33FF] px-[16px] border rounded-[30px] font-sst font-[700] py-[6px] border-[#BB33FF]'>CANCEL</button>
                    </div>
                </div>
            )}



        </div>
    )
}