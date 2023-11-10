import React from 'react'
import ShowIcon from '../icons/ShowIcon';
import HideIcon from '../icons/HideIcon';

type ShowHideButtonProps = {
    handleOnClick: () => void;
    isShow: boolean;
    textShowHide?: string;
}

function ShowHideButton({ handleOnClick, isShow, textShowHide }: ShowHideButtonProps) {
    return (
        <button onClick={handleOnClick} className='flex items-center justify-center gap-[10px] h-[40px] min-w-[131px] bg-[#C2DAFE] rounded-[15px] px-[15px] py-[5px]'>
            {isShow ? <HideIcon /> : <ShowIcon />}
            {
                textShowHide ? <span className='font-[700] text-[22px]'>{isShow ? `HIDE ${textShowHide}` : `SHOW ${textShowHide}`}</span> : <span className='font-[700] text-[22px]'>{isShow ? "HIDE" : "SHOW"}</span>
            }

        </button>
    )
}

export default ShowHideButton
