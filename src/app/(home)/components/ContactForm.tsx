"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Stripe from "../design/Stripe"
import { ArrowRight, Loader } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import emailjs from '@emailjs/browser'

export function ContactForm({ emailConfig }: { emailConfig: { [key: string]: string } }) {

    const initialState = { senderName: "", senderEmail: "", message: "" }
    const [contactInfo, setContactInfo] = useState(initialState)
    const [isLoading, setIsLoading] = useState(false)

    const handleContact = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!contactInfo.senderName) {
            toast.error("Please enter your name.")
            return
        }

        if (!contactInfo.senderEmail) {
            toast.error("Please enter your email.")
            return
        }

        if (!contactInfo.message) {
            toast.error("Please enter your message.")
            return
        }

        try {

            setIsLoading(true)
            await emailjs.send(emailConfig.serviceId,
                emailConfig.templateId,
                contactInfo,
                emailConfig.publicKey);
            setContactInfo(() => initialState)
            toast.success("Message sent successfully.")

        } catch (e) {
            toast.error("Could not send message, try again later.")
            console.log("Message error:", e)
        } finally {
            setIsLoading(false)
        }


    }

    const handleChange = (key: string, value: string) => {
        setContactInfo((prev) => {
            return { ...prev, [key]: value }
        })
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
                                onChange={(e) => handleChange("senderName", e.target.value)}
                                value={contactInfo["senderName"]}
                                id="name"
                                type="text"
                                placeholder="Phunsukh Wangdu"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                onChange={(e) => handleChange("senderEmail", e.target.value)}
                                value={contactInfo["senderEmail"]}
                                id="email"
                                type="email"
                                placeholder="rancho@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="message">Your Message</Label>
                            <Textarea onChange={(e) => handleChange("message", e.target.value)}
                                value={contactInfo["message"]}
                                placeholder="Tell me, what's in your mind?"
                                id="message" />
                        </div>
                        <Button type="submit" disabled={isLoading} className="w-full mt-4 flex items-center gap-3">
                            {
                                isLoading ? <><Loader size={17} className="animate-spin" /><span>Sending...</span></>
                                    : <><span>Shooooot</span> <ArrowRight strokeWidth={3} size={16} /></>
                            }
                        </Button>
                    </div>

                </div>
            </div>
        </form>
    )
}
