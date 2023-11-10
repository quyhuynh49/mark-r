import clsx from 'clsx';
import React from 'react'
import Input from '../../../../components/MarkR/Input';
import PickList from '../../../../components/MarkR/PickList'
import MultiselectPickList from '../../../../components/MarkR/MultiselectPickList'
import { RULE, REFERENCE_COUNTRY, STERILISATION_SITES } from '../../../../data/mockup';

type SecondaryInfoProps = {
    className?: string;
}

function SecondaryInfo({ className }: SecondaryInfoProps) {
    return (
        <section className={clsx("grid grid-cols-5 grid-rows-4 gap-[10px]", className)}>
            <Input label='Name as Per Label' placeholder='Enter Name as Per Label' variant='secondary' />
            <Input label='Local Device Description' placeholder='Enter Local Device Description' variant='secondary' />

            <PickList title='Rule' placeholder='Select Rule' data={RULE} variant='secondary' />
            <MultiselectPickList variant='secondary' className='row-span-3' title='Local IFU Windchill' placeholder='Select Local IFU Windchill' data={STERILISATION_SITES} />
            <MultiselectPickList variant='secondary' className='row-span-3' title='Global IFU Windchill' placeholder='Select Global IFU Windchill' data={STERILISATION_SITES} />
            <Input label='GMDN' placeholder='Enter GMDN' variant='secondary' type="number" />
            <Input label='Halal Registration' placeholder='Enter Halal Registration' variant='secondary' type="number" />
            <Input label='Shelf Life' placeholder='Enter Shelf Life' variant='secondary' type="number" />
            <Input label='CFS/CFG Nr.' placeholder='Enter CFS/CFG Nr.' variant='secondary' />
            <Input label='Potential Sales (AOP/AI)' placeholder='Enter Potential Sales (AOP/AI)' variant='secondary' type="number" />
            <Input label='Reg. Actual Approval Timeline' placeholder='Enter Reg. Actual Approval Timeline' variant='secondary' type="number" />
            <PickList title='Country of Origin' placeholder='Select Country of Origin' data={REFERENCE_COUNTRY} variant='secondary' />
            
            

          
            <Input label='Reg. Queries from Authority Info' placeholder='Enter Reg. Queries from Authority Info' variant='secondary' />
            <Input label='Reg. Total Fee' placeholder='Enter Reg. Total Fee' variant='secondary' type="number" />
            <Input label='RA Representative' placeholder='LOOKUP USER FIELD ' variant='secondary' />
        </section>
    )
}

export default SecondaryInfo
