"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Stripe from "../design/Stripe"
import { ArrowRight } from "lucide-react"

export function ContactForm() {

    const handleContact = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Contact form clicked')
    }

    return (
        <form onSubmit={handleContact} className="w-full lg:grid lg:grid-cols-2 relative">
            <div className="mt-[10rem] lg:mt-[5rem]">
                <Stripe />
            </div>
            <div className="flex items-center justify-center py-12 mt-[3rem]">
                <div className="w-[90%] md:w-[60%] lg:w-[70%]">
                    <div className="grid gap-2 text-center mb-5 mt-[4rem] lg:mt-0">
                        <h1 className="text-3xl font-bold">Get in touch</h1>
                        <p className="text-balance text-muted-foreground">
                            I would love to hear you out!
                        </p>
                    </div>
                    <div className="grid gap-4 mt-5">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="Phunsukh Wangdu"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="rancho@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="message-2">Your Message</Label>
                            <Textarea placeholder="Tell me, what's in your mind?" id="message-2" />
                        </div>
                        <Button type="submit" className="w-full mt-4 flex items-center gap-3">
                            <span>Shooooot</span> <ArrowRight strokeWidth={3} size={16} />
                        </Button>
                    </div>

                </div>
            </div>
        </form>
    )
}
