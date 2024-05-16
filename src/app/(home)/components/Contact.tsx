import React from 'react'
import { ContactForm } from './ContactForm'

const Contact = () => {
    return (
        <div className="h-screen">
            <h1 className="text-xl font-semibold text-center">
                <code className="text-primary">{`<Contact me />`}</code>
            </h1>

            <div className='mt-5'>
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact
