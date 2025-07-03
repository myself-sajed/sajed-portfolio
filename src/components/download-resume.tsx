"use client";
import React from 'react'

const DownloadResume = () => {

    const downloadResume = () => {
        const pdfUrl = "/assets/resume/sajed-resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Shaikh Sajed Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <p onClick={downloadResume}
                className='hover:text-blue-600 hover:underline font-semibold cursor-pointer'>
                Download Resume
            </p>
            <a href="mailto:digitalsajed@gmail.com" target="_blank"
                rel="noopener noreferrer" className='hover:text-blue-600 hover:underline font-semibold cursor-pointer'>digitalsajed@gmail.com</a>
            <a href="tel:7773936878" target="_blank"
                rel="noopener noreferrer" className='hover:text-blue-600 hover:underline font-semibold cursor-pointer'>7773936878</a>
        </>
    )
}

export default DownloadResume
