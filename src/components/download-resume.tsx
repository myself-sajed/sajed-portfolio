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
        <p onClick={downloadResume} className='text-blue-600 hover:underline font-semibold text-sm cursor-pointer'>Download Resume</p>
    )
}

export default DownloadResume
