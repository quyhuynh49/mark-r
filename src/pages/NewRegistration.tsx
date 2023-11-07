import React from 'react'
import Heading from '../components/Heading'
import Accordion from '../components/Accordion/Accordion'

function NewRegistration() {
    return (
        <div className='bg-[#ffffff]'>
            <Heading className='container'>New Registration</Heading>
            <div className='container'>
                <Accordion label='Registration Infomation'>
                    child
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

export default NewRegistration
