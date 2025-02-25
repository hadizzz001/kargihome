"use server";
import { Resend } from "resend";
import { redirect } from "next/navigation";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendData = async (formData) => {
    console.log(formData);
    
    const fullName = formData.get("fullName");
    const mobileNumber = formData.get("mobileNumber");
    const address = formData.get("address");
    const citizenship = formData.get("citizenship");
    const email = formData.get("email");
    const profession = formData.get("profession");
    const transactionType = formData.get("transactionType");

    try {
        // Sending email logic
        if (fullName) {
            await resend.emails.send({
                from: "info@kargihome",
                to: "info@kargihome",
                subject: "New message from your website",
                text: `
                    Full Name: ${fullName}
                    Mobile Number: ${mobileNumber}
                    Address: ${address}
                    Citizenship: ${citizenship}
                    Email: ${email}
                    Profession: ${profession}
                    Transaction Type: ${transactionType}
                `,
            });
        } else {
            await resend.emails.send({
                from: "info@kargihome",
                to: "info@kargihome",
                subject: "New subscriber from your website",
                text: `Email: ${email}`,
            });
        }

        // Redirect upon success
        redirect("/thank");
    } catch (error) {
        console.error("Error sending email:", error);

        // Return error response for potential UI handling
        return { success: false, error: error.message };
    }
};
