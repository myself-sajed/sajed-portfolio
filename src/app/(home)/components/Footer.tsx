import Link from "next/link"

const Footer = () => {
    return (
        <div className="mt-[4rem] border-double border-t-4 border-primary w-full bg-white relative z-40">
            <div className="p-4 text-center my-5">
                <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight text-center">
                    Crafted with 💖 by Shaikh Sajed
                </h1>

                <div className="my-4">
                    <div className="text-sm text-muted-foreground">
                        Follow me on: <div className="space-x-6">
                            <Link
                                href="https://github.com/sajedshaikh"
                                target="_blank"
                                className="text-primary hover:text-primary/80">
                                GitHub
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/shaikhsajed"
                                target="_blank"
                                className="text-primary hover:text-primary/80">
                                LinkedIn
                            </Link>
                            <Link
                                href="https://www.instagram.com/myself_sajed"
                                target="_blank"
                                className="text-primary hover:text-primary/80">
                                Instagram
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Shaikh Sajed. All rights
                        reserved.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Footer
