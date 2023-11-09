import React, { useState } from 'react'
import ShowIcon from '../../icons/ShowIcon';
import HideIcon from '../../icons/HideIcon';
type DataListProps = {
    obj_data: {
        data_field_1: string;
        data_field_2: string;
        data_field_3: string;
        data_field_4: string;
    }
}
function DataList({ obj_data }: DataListProps) {

    const [isShow, setIsShow] = useState(false);

    const handleShowHide = (e: Event) => {
        e.stopPropagation();
        setIsShow(!isShow);
    }

    return (
        <React.Fragment>
            <div className='flex items-center'>
                <div className='mr-[10px] underline'>{obj_data.data_field_1}</div>
                <div onClick={(e: any): void => handleShowHide(e)}>{isShow ? <ShowIcon className='bg-[#00EEFF] h-[24px]' /> : <HideIcon className='bg-[#00EEFF] h-[24px]' />}</div>
            </div>
            {isShow && (
                <ul className='text-[#61737B] flex flex-col items-start'>
                    <li>{obj_data.data_field_2}</li>
                    <li>{obj_data.data_field_3}</li>
                    <li>{obj_data.data_field_4}</li>
                </ul>
            )}
        </React.Fragment>
    )
}

export default DataList
