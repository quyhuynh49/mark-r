import React from 'react'
import Heading from '../../components/Heading'
import Accordion from '../../components/Accordion/Accordion'
import MainInfo from './sections/RegistrationInfo/MainInfo'
import SecondaryInfo from './sections/RegistrationInfo/SecondaryInfo'

function index() {
    return (
        <div className='bg-[#ffffff]'>
            <Heading className='container'>New Registration</Heading>
            <div className='container'>
                <Accordion label='Registration Infomation'>
                    <MainInfo className='mt-[18px]' />
                    <SecondaryInfo className='mt-[18px]' />
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

export default index
