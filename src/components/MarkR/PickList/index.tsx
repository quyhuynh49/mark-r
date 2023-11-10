import React, { useState } from 'react'
import DropdownIcon from '../../icons/DropdownIcon'
import clsx from 'clsx';

type PickListProps = {
    title: string;
    placeholder: string;
    data: string[];
    variant?: 'main' | 'secondary';
    onChangeCallback?: (_value: string) => void;
}

export default function Index({ title, placeholder, data, variant, onChangeCallback }: PickListProps) {
    const [isPickListDisplayed, setIsPickListDisplayed] = useState(false);
    const [selected, setSelected] = useState("");
    const [search, setSearch] = useState("");

    return (
        <div className={clsx('relative w-full h-full rounded-[15px] p-[10px]',
            MAPPING_PICK_LIST_WRAPPER_STYLE_DEFAULT[variant || 'main'],
        )}>
            <div className='flex justify-between items-center'>
                <div className='font-sst font-[700] text-[14px] text-[#003C71]'>{title.toUpperCase()}</div>
                <button onClick={() => setIsPickListDisplayed(preState => !preState)}><DropdownIcon /></button>
            </div>
            <button
                onClick={() => setIsPickListDisplayed(preState => !preState)}
                className={clsx('w-full text-start font-sst font-[500] text-[16px] text-[#9AC2FE]',
                    MAPPING_PICK_LIST_STYLE_DEFAULT[variant || 'main']
                )}>
                {selected ? selected : placeholder}
            </button>
            {isPickListDisplayed &&
                <div className='z-10 absolute border border-solid border-[#999999] bg-[#ffffff] shadow-lg'>
                    <div className='p-[10px]'>
                        <input className='w-full px-[10px] py-[5px] bg-[#EEEEEE] text-[#C2C2C2] font-[500] rounded-[5px] font-sst focus:outline-none' type="text" value={search}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)}
                        />
                    </div>

                    <ul className='max-h-[200px] overflow-y-auto'>
                        {
                            data?.map((value: string) => (
                                <li
                                    key={value}
                                    onClick={() => {
                                        if (value.toLowerCase() !== selected.toLowerCase()) {
                                            setSelected(value);
                                            if (onChangeCallback) onChangeCallback(value)
                                            setIsPickListDisplayed(false);
                                            setSearch('');
                                        }
                                    }}
                                    className={clsx('flex px-[10px] font-[500] font-sst cursor-pointer hover:bg-[#8800CC] hover:text-[#ffffff]',
                                        value.toLowerCase() === selected?.toLowerCase() && 'bg-[#8800CC] text-[#ffffff]',
                                        value.toLowerCase().includes(search.trim().toLocaleLowerCase()) ? 'block' : 'hidden'
                                    )}
                                >{value}</li>
                            ))
                        }
                    </ul>
                </div>
            }
        </div>

    )
}


const MAPPING_PICK_LIST_WRAPPER_STYLE_DEFAULT: { [key: string]: string } = {
    main: 'bg-[#F2F7FF]',
    secondary: 'bg-[#F2F2F2]'
}

const MAPPING_PICK_LIST_STYLE_DEFAULT: { [key: string]: string } = {
    main: 'bg-[#F2F7FF] text-[#9AC2FE]',
    secondary: 'bg-[#F2F2F2] text-[#CCCCCC]'
}
