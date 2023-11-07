import clsx from 'clsx';
import React from 'react'
import Input from '../../../../components/MarkR/Input';
import Dropdown from '../../../../components/MarkR/Dropdown';

type MainInfoProps = {
    className?: string;
}

function MainInfo({ className }: MainInfoProps) {
    return (
        <section className={clsx('grid grid-cols-5 grid-rows-5 gap-[10px]', className)}>
            <div className="border"><Dropdown /></div>
            <div className="border row-span-3">2</div>
            <div className="border row-span-3">3</div>
            <div className="border row-span-3">4</div>
            <div className="border row-span-3">5</div>
            <Input label='device description' placeholder='Enter Device/Search Device' />
            <Input label='registered product family/system/set name' placeholder='Enter Registered Product Family' />
            <Input label='indication' placeholder='Enter Indication' />
            <Input label='gmdn' placeholder='Enter GMDN or NA' />
            <div className="border">10</div>
            <div className="border">11</div>
            <Input label='submission id' placeholder='Enter Submission ID' />
            <Input label='grouping' placeholder='Enter Grouping' />
            <Input label='classification/rule' placeholder='Enter Classification/Rule' />
        </section>
    )
}

export default MainInfo
