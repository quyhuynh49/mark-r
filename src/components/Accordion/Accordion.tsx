import { ReactNode, useState } from 'react';
import ShowHideButton from './ShowHideButton';

type AccordionProps = {
    label: string;
    children: ReactNode;
}

function Accordion({ label, children }: AccordionProps) {
    const [isShow, setIsShow] = useState(false);
    return (
        <div className='mt-[10px] w-full border-2 border-[#cccccc] border-solid rounded-[10px]'>
            <div className='pl-[20px] pr-[10px] py-[18px]'>
                <div className='flex justify-between'>
                    <h2 className='text-[#012965] font-sst font-[700] text-[26px]'>{label.toUpperCase()}</h2>
                    <ShowHideButton isShow={isShow} handleOnClick={() => setIsShow(!isShow)} />
                </div>
                {isShow && <div>{children}</div>}
            </div>
        </div>
    )
}

export default Accordion
