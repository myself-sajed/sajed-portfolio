import React from 'react'
import { ContactForm } from './ContactForm'

const Contact = () => {

    const emailConfig = {
        serviceId: process.env.NEXT_PUBLIC_serviceId!,
        templateId: process.env.NEXT_PUBLIC_templateId!,
        publicKey: process.env.NEXT_PUBLIC_publicKey!
    }

    return (
        <div className="h-screen">
            <div className='mt-[4rem] lg:mt-5'>
                <ContactForm emailConfig={emailConfig} />
            </div>
        </div>
    )
}

export default Contact
