import { ReactNode, useState } from 'react';
import ShowHideButton from './ShowHideButton';
import clsx from 'clsx';

type AccordionProps = {
    label: string;
    children: ReactNode;
    className?: string;
    textShowHide?: string;
}

function Accordion({ label, children, className, textShowHide }: AccordionProps) {
    const [isShow, setIsShow] = useState(true);
    return (
        <div className={clsx('mx-[16px] my-[10px] w-full border-2 border-[#cccccc] border-solid rounded-[10px]', className)}>
            <div className='pl-[20px] pr-[10px] py-[18px]'>
                <div className='flex justify-between mb-[20px]'>
                    <h2 className='text-[#012965] font-sst font-[700] text-[26px]'>{label.toUpperCase()}</h2>
                    <ShowHideButton textShowHide={textShowHide} isShow={isShow} handleOnClick={() => setIsShow(!isShow)} />
                </div>
                {isShow && <div className='flex flex-col'>{children}</div>}
            </div>
        </div>
    )
}

export default Accordion
