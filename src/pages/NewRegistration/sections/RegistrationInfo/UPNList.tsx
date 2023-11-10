import React from 'react'
import ArrowDownIcon from '../../../../components/icons/ArrowDownIcon'

function UPNList() {
    return (
        <div>
            <div className='flex gap-[20px]'>
                <input className='border px-[20px] py-[10px] rounded-[20px]' type="text" placeholder='search UPN' />
                <button className='text-[#ffffff] font-sst font-[500] bg-[#B03DFF] border px-[20px] py-[10px] border-[#000000]'>Apply Filter</button>
                <button className='text-[#ffffff] font-sst font-[500] bg-[#B03DFF] border px-[20px] py-[10px] border-[#000000]'>+ Agency Info</button>
            </div>

            <div className='border flex flex-col justify-start'>
                <div className='flex justify-between items-center border mt-[20px] px-[10px] py-[5px] bg-[#B03DFF] rounded-[5px]'>
                    <div className='flex gap-[10px]'>
                        <input type="checkbox" />
                        <label className='text-[#ffffff] font-sst'>UPN 123</label>
                    </div>
                    <button><ArrowDownIcon /></button>
                </div>
                <div className='p-[20px]'>
                    The list fields (main and secondary fields) belong to UPN (in this we can edit, update these fields)
                    <div className='flex justify-center '>
                        <button className='border px-[20px] py-[10px]'>save</button>
                        <button>cancel</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UPNList

