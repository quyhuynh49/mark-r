import React, { useEffect, useState } from 'react';
import DropdownIcon from '../../icons/DropdownIcon';

import DataList from './DataList';
import clsx from 'clsx';


type MultiselectPickListProps = {
    title: string;
    placeholder: string;
    data: {
        data_field_1: string;
        data_field_2: string;
        data_field_3: string;
        data_field_4: string;
    }[];
    className?: string;
    variant?: 'main' | 'secondary';
}

export default function Index({ title, placeholder, data, className, variant }: MultiselectPickListProps) {
    const [isDropdownDisplayed, setIsDropdownDisplayed] = useState(false);
    const [selectedDataFields, setSelectedDataFields] = useState<Record<string, boolean>>(
        data.reduce((obj, datafield) => ({ ...obj, [datafield.data_field_1]: false }), {})
    )
    const [search, setSearch] = useState('');
    const [results, setResults] = useState<{
        data_field_1: string;
        data_field_2: string;
        data_field_3: string;
        data_field_4: string;
    }[]>([]);

    /* reset search text */
    useEffect(() => {
        if (!isDropdownDisplayed) {
            setSearch('');
        }
    }, [isDropdownDisplayed]);

    const handleConfirm = () => {
        /* filter datafield selected */
        setResults(data.filter(el =>
            Object.entries(selectedDataFields).filter(el => el[1] === true).map(el => el[0]).includes(el.data_field_1)
        ))
        /* reset search text */
        setSearch('');
        /* close popup */
        setIsDropdownDisplayed(false);
    }
    const handleOnClickChecked = (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
        event.stopPropagation();
    }
    return (
        <div className={clsx('relative w-full h-full rounded-[15px] p-[10px]', className,
            MAPPING_MULTISELECT_PICKLIST_WRAPPER_STYLE_DEFAULT[variant || 'main']
        )}>
            <div className='flex justify-between items-center'>
                <div className='font-sst font-[700] text-[14px] text-[#003C71]'>{title.toUpperCase()}</div>
                <button onClick={() => setIsDropdownDisplayed(preState => !preState)}><DropdownIcon /></button>
            </div>
            <button
                onClick={() => setIsDropdownDisplayed(preState => !preState)}
                className={clsx('w-full mt-[16px] font-sst font-[500] text-[16px] flex flex-col gap-[5px]',
                    MAPPING_MULTISELECT_PICKLIST_STYLE_DEFAULT[variant || 'main']
                )}>
                {results.length === 0 ? placeholder : results.map((el) => {
                    return <div key={el.data_field_1}>
                        <DataList obj_data={el} />
                    </div>
                })
                }
            </button>
            {isDropdownDisplayed && (
                <div className='z-10 absolute w-[180%] border border-solid border-[#999999] bg-[#ffffff] shadow-lg p-[10px]'>
                    <input className='w-full bg-[#EEEEEE] text-[#C2C2C2] font-[500] rounded-[5px] font-sst focus:outline-none px-[10px] py-[5px]'
                        value={search}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)}
                        type="text" />
                    <div className='mt-[20px] mb-[40px] h-[100px] overflow-y-auto'>
                        {data.filter(el => search.trim().length === 0 ? el : el.data_field_1.toLowerCase().includes(search.trim())).map(datafield => {
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
                                    <label onClick={(event) => handleOnClickChecked(event)} className='font-sst font-[700]' htmlFor={`input-${datafield.data_field_1}`}>{datafield.data_field_1}</label>
                                </div>
                            )
                        })}
                    </div>
                    <div className='flex flex-wrap w-full justify-end gap-[10px]'>
                        <button
                            onClick={handleConfirm}

                            className='w-[150px] bg-[#BB33FF] text-[#ffffff] px-[16px] border rounded-[30px] font-sst font-[700] py-[6px]'>CONFIRM</button>
                        <button
                            onClick={() => setIsDropdownDisplayed(preState => !preState)}
                            className='w-[150px] bg-[#ffffff] text-[#BB33FF] px-[16px] border rounded-[30px] font-sst font-[700] py-[6px] border-[#BB33FF]'>CANCEL</button>
                    </div>
                </div>
            )}
        </div>
    )
}


const MAPPING_MULTISELECT_PICKLIST_WRAPPER_STYLE_DEFAULT: { [key: string]: string } = {
    main: 'bg-[#F2F7FF]',
    secondary: 'bg-[#F2F2F2]'
}

const MAPPING_MULTISELECT_PICKLIST_STYLE_DEFAULT: { [key: string]: string } = {
    main: 'bg-[#F2F7FF] text-[#9AC2FE]',
    secondary: 'bg-[#F2F2F2] text-[#CCCCCC]'
}
