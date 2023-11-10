import React, { useState } from 'react'
import Heading from '../../components/Heading'
import Accordion from '../../components/Accordion/Accordion'
import MainInfo from './sections/RegistrationInfo/MainInfo'
import SecondaryInfo from './sections/RegistrationInfo/SecondaryInfo'
import SpecialAccess from './sections/RegistrationInfo/SpecialAccess'
import NonMD from './sections/RegistrationInfo/NonMD'
import Input from '../../components/MarkR/Input'
import PlusIcon from '../../components/icons/PlusIcon'
import UPNList from './sections/RegistrationInfo/UPNList'

export default function Index() {
    const [application, setApplication] = useState('');

    console.log(application)

    return (
        <div className='bg-[#ffffff]'>
            <Heading className='container'>New Registration</Heading>
            <div className='container'>
                <Accordion label='Registration Infomation'>
                    <MainInfo setApplication={setApplication} className='mt-[20px]' />
                    {application === "Special Access" && (
                        <SpecialAccess className='mt-[10px]' />
                    )}
                    {application === "Non - MD" && (
                        <NonMD className='mt-[10px]' />
                    )}
                    <SecondaryInfo className='mt-[40px] text-center' />
                    <div className='mt-[40px] flex gap-[10px] items-center justify-center'>
                        <Input className='w-[312px] h-[103px]' label='UPN' placeholder='Enter UPN / Search UPN' />
                        <button><PlusIcon /></button>
                    </div>
                </Accordion>
                <Accordion textShowHide='ALL UPN' label='List of UPN'>
                    <UPNList />
                </Accordion>
                <Accordion label='License Registration Information'>
                    License Registration Information
                </Accordion>
                <Accordion label='Additional Information'>
                    Additional Information
                </Accordion>
            </div>
        </div>
    )
}
