import clsx from 'clsx';
import React from 'react'
import Input from '../../../../components/MarkR/Input';
type SecondaryInfoProps = {
    className?: string;
}

function SecondaryInfo({ className }: SecondaryInfoProps) {
    return (
        <section className={clsx("grid grid-cols-5 grid-rows-7 gap-[10px]", className)}>
            <Input label='DEVICE BRAND NAME' placeholder='Enter Device Brand Name' type='secondary' />
            <Input label='NAME AS PER LABEL' placeholder='Enter Name as Per Label' type='secondary' />
            <Input label='HALAL REGISTRATION NUMBER' placeholder='Enter Halal Registration Number' type='secondary' />
            <Input label='SHELF LIFE' placeholder='Enter Shelf Life' type='secondary' />
            <Input label='RELIANCE COUNTRY' placeholder='Enter Reliance Country' type='secondary' />

            <Input label='ONLINE SINGLE SUBMISSION ID' placeholder='Enter Online Single Submission ID' type='secondary' />
            <Input label='LICENSE HOLDER / OWNER' placeholder='Enter License Holder / Owner' type='secondary' />
            <Input label='TELECOMMUNICATION APPROVAL NUMBER' placeholder='Enter Telecommunication Approval Number' type='secondary' />
            <Input label='UDI' placeholder='Enter UDI' type='secondary' />
            <Input label='CLASSIFICATION CERT. NUMBER' placeholder='Enter Classification Cert. Number' type='secondary' />

            <Input label='IMPORT LICENSE NUMBER' placeholder='Enter Import License Number' type='secondary' />
            <Input label='LOCAL WINDCHILL TECHNICAL FILE NUMBER' placeholder='Enter Local Windchill Technical File Number' type='secondary' />
            <Input label='LOCAL DFU WINDCHILL NUMBER' placeholder='Enter Local DFU Windchill Number' type='secondary' />
            <Input label='GLOBAL DFU WINDCHILL NUMBER' placeholder='Enter Global DFU Windchill Number' type='secondary' />
            <Input label='CFS NUMBER' placeholder='Enter CFS Number' type='secondary' />

            <Input label='CFG NUMBER' placeholder='Enter CFG Number' type='secondary' />
            <Input label='LEGAL STATUS' placeholder='Enter On/Off' type='secondary' />
            <Input label='SLI STATUS' placeholder='Enter On/Off' type='secondary' />
            <Input label='SAFETY NET' placeholder='Enter Safety Net' type='secondary' />
            <Input label='PSST (COUNTRY/ASEAN APPROVED MATERIAL NUMBER)' placeholder='Enter PSST(Country/ASEAN Approved Material Number)' type='secondary' />

            <div className="border">21</div>
            <div className="border">22</div>
            <div className="border">23</div>
            <div className="border">24</div>
            <div className="border">25</div>
            <div className="border">26</div>
            <div className="border">27</div>
            <div className="border">28</div>
            <div className="border">29</div>
        </section>
    )
}

export default SecondaryInfo
