"use server";
import { Resend } from "resend";
import { redirect } from 'next/navigation';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail1 = async (formData: FormData) => { 
    const email = formData.get("email"); 

 
        resend.emails.send({
            from: "info@kargihome",
            to: email+"",
            subject: "Kargihome Team",
            text: "Thanks for registration with us. One of our agents will contact you shortly.",
        }) 
     

}

