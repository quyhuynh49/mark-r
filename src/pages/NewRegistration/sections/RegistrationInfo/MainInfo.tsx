import clsx from 'clsx';
import React from 'react'
import Input from '../../../../components/MarkR/Input';
import MultiselectPickList from '../../../../components/MarkR/MultiselectPickList';
import PickList from '../../../../components/MarkR/PickList'
import { APPLICATION, DIVISION, UPN_STATUS, CLASSIFICATION, GROUPING, LICENSE_MARKET, MAMUFACTURING_SITE, LEGAL_MANUFACTURER, STERILISATION_SITES, REFERENCE_COUNTRY } from '../../../../data/mockup';
import DateField from '../../../../components/MarkR/DateField';

type MainInfoProps = {
    className?: string;
}

function MainInfo({ className }: MainInfoProps) {
    return (
        <section className={clsx('grid grid-cols-5 grid-rows-5 gap-[10px]', className)}>
            <PickList title='APPLICATION' placeholder='Select Registered/New/Renewal' data={APPLICATION} />
            <MultiselectPickList className='row-span-3' title='Legal Manufacturer' placeholder='Select Legal Manufacturer' data={LEGAL_MANUFACTURER} />
            <MultiselectPickList className='row-span-3' title='Manufacturing site' placeholder='Select Manufacturing site' data={MAMUFACTURING_SITE} />
            <MultiselectPickList className='row-span-3' title='Sterilisation Site(s)' placeholder='Select Sterilisation Site(s)' data={STERILISATION_SITES} />
            <div className="border row-span-3">4</div>
            <PickList title='DIVISION' placeholder='Select Division' data={DIVISION} />
            <PickList title='REFERENCE COUNTRY' placeholder='Select Reference Country' data={REFERENCE_COUNTRY} />
            <PickList title='UPN STATUS' placeholder='Select UPN Status' data={UPN_STATUS} />
            <PickList title='CLASSIFICATION' placeholder='Select Classification' data={CLASSIFICATION} />
            <PickList title='GROUPING' placeholder='Select Grouping' data={GROUPING} />
            <PickList title='LICENSE_MARKET' placeholder='Select License Market' data={LICENSE_MARKET} />

            <Input label='Reg. Submission ID' placeholder='Enter Submission ID' />
            <Input label='Online Single Submission ID' placeholder='Enter Online Single Submission ID' />
            <Input label='UPN' placeholder='Enter UPN' />
            <Input label='Registered Product Set' placeholder='Enter Registered Product Set' />
            <Input label='Device Description' placeholder='Enter Device Description' />
            <Input label='Approved indication' placeholder='Enter Approved indication' />
            <Input label='License Owner' placeholder='Enter License Owner' />
            <DateField />
        </section>
    )
}

export default MainInfo
