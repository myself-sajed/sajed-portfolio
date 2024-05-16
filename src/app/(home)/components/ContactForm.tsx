import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Stripe from "./Stripe"
import { ArrowRight } from "lucide-react"

export function ContactForm() {
    return (
        <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] relative">
            <div>
                <Stripe />
            </div>
            <div className="flex items-center justify-center py-12">
                <div className="w-[70%]">
                    <div className="grid gap-2 text-center mb-5">
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
                                placeholder="Shaikh Sajed"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="message-2">Your Message</Label>
                            <Textarea placeholder="Type your message here." id="message-2" />
                            <p className="text-xs text-muted-foreground text-right">
                                I am Open! {`Let's`} Discuss.
                            </p>
                        </div>
                        <Button type="submit" className="w-full mt-4 flex items-center gap-3">
                            <span>Shooooot</span> <ArrowRight strokeWidth={3} size={16} />
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    )
}
