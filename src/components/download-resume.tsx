import React from 'react'

const DownloadResume = () => {

    const downloadResume = () => {
        const pdfUrl = "/assets/resume/sajed-resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "sajed-resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <p className='text-blue-600 hover:underline font-semibold text-sm cursor-pointer'>Download Resume</p>
    )
}

export default DownloadResume
