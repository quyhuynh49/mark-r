import clsx from 'clsx';
import DateField from '../../../../components/MarkR/DateField';
import Input from '../../../../components/MarkR/Input';
import MultiselectPickList from '../../../../components/MarkR/MultiselectPickList';
import PickList from '../../../../components/MarkR/PickList';
import TextArea from '../../../../components/MarkR/TextArea';
import { APPLICATION, CLASSIFICATION, DIVISION, GROUPING, LEGAL_MANUFACTURER, LICENSE_MARKET, MAMUFACTURING_SITE, REFERENCE_COUNTRY, STERILISATION_SITES, UPN_STATUS } from '../../../../data/mockup';

type MainInfoProps = {
    className?: string;
    setApplication?: (_value: string) => void;
}

function MainInfo({ className, setApplication }: MainInfoProps) {

    return (
        <section className={clsx('grid grid-cols-5 grid-rows-6 gap-[10px]', className)}>
            <Input label='Online Single Submission ID' placeholder='Enter Online Single Submission ID' />
            <PickList title='LICENSE_MARKET' placeholder='Select License Market' data={LICENSE_MARKET} />

            <MultiselectPickList className='row-span-3' title='Legal Manufacturer' placeholder='Select Legal Manufacturer' data={LEGAL_MANUFACTURER} />
            <MultiselectPickList className='row-span-3' title='Manufacturing site' placeholder='Select Manufacturing site' data={MAMUFACTURING_SITE} />
            <MultiselectPickList className='row-span-3' title='Sterilisation Site(s)' placeholder='Select Sterilisation Site(s)' data={STERILISATION_SITES} />

            <PickList title='DIVISION' placeholder='Select Division' data={DIVISION} />
            <PickList title='REFERENCE COUNTRY' placeholder='Select Reference Country' data={REFERENCE_COUNTRY} />
            <PickList title='UPN STATUS' placeholder='Select UPN Status' data={UPN_STATUS} />
            <PickList title='CLASSIFICATION' placeholder='Select Classification' data={CLASSIFICATION} />
            <PickList title='GROUPING' placeholder='Select Grouping' data={GROUPING} />


            <Input label='Reg. Submission ID' placeholder='Enter Submission ID' />
            <PickList onChangeCallback={setApplication} title='APPLICATION' placeholder='Select Registered/New/Renewal' data={APPLICATION} />
            <TextArea title='Approved indication' placeholder='Enter Approved indication' className='row-span-2 col-span-2' />

            <Input label='Registered Product Set' placeholder='Enter Registered Product Set' />
            <Input label='Device Description' placeholder='Enter Device Description' />
            <Input label='Approved indication' placeholder='Enter Approved indication' />
            <Input label='License Owner' placeholder='Enter License Owner' />

            <DateField title='Reg. Approval Date' />
            <DateField title='Reg. CAB Submission Date' />
            <DateField title='Reg. CAB Approval Date' />
        </section>
    )
}

export default MainInfo
