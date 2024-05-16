import React from 'react'

const ProjectCard = () => {
    return (
        <section className="cta-banner bg-white rounded-xl overflow-hidden shadow-[0_0_0_1px_hsl(221_39%_11%/0.05),0_0.3px_0.4px_hsl(221_39%_11%/0.02),0_0.9px_1.5px_hsl(221_39%_11%/0.045),0_3.5px_6px_hsl(221_39%_11%/0.09)]
">
            <div className="grid items-center gap-6 lg:grid-cols-2">
                <div className="p-6 min-w-0 lg:col-1">
                    <div className="text-center grid gap-3 lg:text-left lg:pl-6">
                        <h1 className="text-[1.75rem]">I have a dream</h1>

                        <p className="text-[0.9375rem] text-gray-500 lg:text-lg lg:leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>

                        <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                            <a href="#0" className="bg-indigo-700 text-white shadow-md text-[1em] px-4 py-2 rounded-md relative inline-flex justify-center items-center whitespace-nowrap cursor-pointer no-underline leading-tight transition-all duration-200 hover:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700">Download</a>
                            <a href="#0" className="text-gray-900 no-underline bg-[linear-gradient(to_right,_#111827_50%,_hsl(221_39%_11%/0.1)_50%)] bg-[length:200%_1px] bg-no-repeat bg-[position:100%_100%] transition-[background-position_0.2s] hover:bg-[position:0%_100%]">Learn more</a>
                        </div>
                    </div>
                </div>

                <figure className="min-w-0 lg:col-1">
                    <img className="w-full" src="https://d3ae4wrz2ljkbq.cloudfront.net/components/app-light-2.svg" alt="Image description" />
                </figure>
            </div>
        </section>
    )
}

export default ProjectCard


const ProjectCardMore = () => {
    return (
        <div>
            <div className="relative z-[1] py-12 lg:py-20">
                <div className="w-[calc(100%_-_2.5rem)] lg:w-[calc(100%_-_4rem)] mx-auto max-w-lg md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                    <div className="grid grid-cols-12 gap-y-8 lg:gap-12">
                        <article className="story story--featured col-span-12">
                            <a className="story__img rounded" href="#0">
                                <figure className="aspect-w-4 aspect-h-3">
                                    <img className="object-cover" src="../assets/img/article-gallery-img-1.jpg" alt="Image description" />
                                </figure>
                            </a>

                            <div className="story__content">
                                <div className="mb-2 lg:mb-3">
                                    <a className="story__category" href="#0">
                                        <svg className="icon h-[1em] w-[1em] inline-block text-inherit fill-current leading-none shrink-0 mr-1 lg:mr-1.5" aria-hidden="true" viewBox="0 0 16 16"><g stroke-width='1' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><circle cx='8' cy='7' r='1.5'></circle><path d='M12.121,14.263a7.5,7.5,0,1,0-8.242,0'></path><path d='M12.377,11.32a5.5,5.5,0,1,0-8.754,0'></path><path d='M6.605,10.5H9.4a1,1,0,0,1,1,1.1L10,15.5H6l-.39-3.9A1,1,0,0,1,6.605,10.5Z'></path></g></svg>
                                        <i className="not-italic">Podcast</i>
                                    </a>
                                </div>

                                <div>
                                    <h2 className="text-4xl mb-2 story__title"><a href="#0">Lorem ipsum dolor sit, amet consectetur adipisicing elit</a></h2>
                                    <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. At iusto sit quasi aliquam quod laboriosam. Nobis, modi repellendus.</p>
                                </div>

                                <div className="story__author mt-3 lg:mt-5">
                                    <a className="block" href="#0">
                                        <img src="../assets/img/article-gallery-img-author-1.svg" alt="Author picture" />
                                    </a>

                                    <div className="leading-[1.1]">
                                        <address className="story__author-name not-italic"><a href="#0" rel="author">Olivia Gribben</a></address>
                                        <p className="story__meta"><time>May 16</time> &mdash; 5 min read</p>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <article className="story col-span-12 lg:col-span-4">
                            <a className="story__img rounded" href="#0">
                                <figure className="aspect-w-4 aspect-h-3">
                                    <img className="object-cover" src="../assets/img/article-gallery-img-2.jpg" alt="Image description" />
                                </figure>
                            </a>

                            <div className="story__content">
                                <div className="mb-2 lg:mb-3">
                                    <a className="story__category" href="#0">
                                        <svg className="icon h-[1em] w-[1em] inline-block text-inherit fill-current leading-none shrink-0 mr-1 lg:mr-1.5" aria-hidden="true" viewBox="0 0 16 16"><g stroke-width='1' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round'><rect x='0.5' y='1.5' width='15' height='13' rx='1' ry='1'></rect><polygon points='5.5 4.5 11 8 5.5 11.5 5.5 4.5'></polygon></g></svg>
                                        <i className="not-italic">Video</i>
                                    </a>
                                </div>

                                <div>
                                    <h2 className="text-3xl story__title"><a href="#0">Lorem ipsum dolor sit amet consectetur adipisicing elit</a></h2>

                                </div>

                                <div className="story__author mt-3 lg:mt-5">
                                    <a className="block" href="#0">
                                        <img src="../assets/img/article-gallery-img-author-2.svg" alt="Author picture" />
                                    </a>

                                    <div className="leading-[1.1]">
                                        <address className="story__author-name not-italic"><a href="#0" rel="author">James Powell</a></address>
                                        <p className="story__meta"><time>May 12</time> &mdash; 5 min read</p>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <article className="story col-span-12 lg:col-span-4">
                            <a className="story__img rounded" href="#0">
                                <figure className="aspect-w-4 aspect-h-3">
                                    <img className="object-cover" src="../assets/img/article-gallery-img-3.jpg" alt="Image description" />
                                </figure>
                            </a>

                            <div className="story__content">
                                <div className="mb-2 lg:mb-3">
                                    <a className="story__category" href="#0">
                                        <svg className="icon h-[1em] w-[1em] inline-block text-inherit fill-current leading-none shrink-0 mr-1 lg:mr-1.5" aria-hidden="true" viewBox="0 0 16 16"><g stroke-width='1' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round'><rect x='0.5' y='1.5' width='15' height='13' rx='1' ry='1'></rect><polygon points='5.5 4.5 11 8 5.5 11.5 5.5 4.5'></polygon></g></svg>
                                        <i className="not-italic">Video</i>
                                    </a>
                                </div>

                                <div>
                                    <h2 className="text-3xl story__title"><a href="#0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis hic veniam harum?</a></h2>

                                </div>

                                <div className="story__author mt-3 lg:mt-5">
                                    <a className="block" href="#0">
                                        <img src="../assets/img/article-gallery-img-author-2.svg" alt="Author picture" />
                                    </a>

                                    <div className="leading-[1.1]">
                                        <address className="story__author-name not-italic"><a href="#0" rel="author">James Powell</a></address>
                                        <p className="story__meta"><time>May 8</time> &mdash; 5 min read</p>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <article className="story col-span-12 lg:col-span-4">
                            <a className="story__img rounded" href="#0">
                                <figure className="aspect-w-4 aspect-h-3">
                                    <img className="object-cover" src="../assets/img/article-gallery-img-4.jpg" alt="Image description" />
                                </figure>
                            </a>

                            <div className="story__content">
                                <div className="mb-2 lg:mb-3">
                                    <a className="story__category" href="#0">
                                        <svg className="icon h-[1em] w-[1em] inline-block text-inherit fill-current leading-none shrink-0 mr-1 lg:mr-1.5" aria-hidden="true" viewBox="0 0 16 16"><g stroke-width='1' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><circle cx='8' cy='7' r='1.5'></circle><path d='M12.121,14.263a7.5,7.5,0,1,0-8.242,0'></path><path d='M12.377,11.32a5.5,5.5,0,1,0-8.754,0'></path><path d='M6.605,10.5H9.4a1,1,0,0,1,1,1.1L10,15.5H6l-.39-3.9A1,1,0,0,1,6.605,10.5Z'></path></g></svg>
                                        <i className="not-italic">Podcast</i>
                                    </a>
                                </div>

                                <div>
                                    <h2 className="text-3xl story__title"><a href="#0">Lorem ipsum dolor sit amet consectetur</a></h2>

                                </div>

                                <div className="story__author mt-3 lg:mt-5">
                                    <a className="block" href="#0">
                                        <img src="../assets/img/article-gallery-img-author-1.svg" alt="Author picture" />
                                    </a>

                                    <div className="leading-[1.1]">
                                        <address className="story__author-name not-italic"><a href="#0" rel="author">Olivia Gribben</a></address>
                                        <p className="story__meta"><time>May 5</time> &mdash; 5 min read</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>

                    <nav className="pagination mt-20 lg:mt-32" aria-label="Pagination">
                        <ol className="pagination__list flex flex-wrap gap-1 lg:gap-1.5 justify-center">
                            <li>
                                <a href="#0" className="pagination__item pagination__item--disabled" aria-label="Go to previous page">
                                    <svg className="icon h-[1em] w-[1em] inline-block text-inherit fill-current leading-none shrink-0 w-[16px] h-[16px] mr-1 lg:mr-1.5 -scale-x-100" viewBox="0 0 16 16"><polyline points="6 2 12 8 6 14" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" /></svg>
                                    <span>Prev</span>
                                </a>
                            </li>

                            <li className="hidden md:inline-flex">
                                <a href="#0" className="pagination__item" aria-label="Go to page 1">1</a>
                            </li>

                            <li className="hidden md:inline-flex">
                                <a href="#0" className="pagination__item" aria-label="Go to page 2">2</a>
                            </li>

                            <li className="hidden md:inline-flex">
                                <a href="#0" className="pagination__item pagination__item--selected" aria-label="Current Page, page 3" aria-current="page">3</a>
                            </li>

                            <li className="hidden md:inline-flex">
                                <a href="#0" className="pagination__item" aria-label="Go to page 4">4</a>
                            </li>

                            <li className="hidden md:inline-flex" aria-hidden="true">
                                <span className="pagination__item pagination__item--ellipsis">...</span>
                            </li>

                            <li className="hidden md:inline-flex">
                                <a href="#0" className="pagination__item" aria-label="Go to page 20">20</a>
                            </li>

                            <li>
                                <a href="#0" className="pagination__item" aria-label="Go to next page">
                                    <span>Next</span>
                                    <svg className="icon h-[1em] w-[1em] inline-block text-inherit fill-current leading-none shrink-0 w-[16px] h-[16px] ml-1 lg:ml-1.5" viewBox="0 0 16 16"><polyline points="6 2 12 8 6 14" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" /></svg>
                                </a>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

        </div>
    )
}


