import dotenv from 'dotenv';
dotenv.config();
import fs from 'fs';
import path from 'path';
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);


function replaceContent(content, data){
    const keys = Object.keys(data); //["name", "otp"]
    keys.forEach(key => {
        content = content.replace(`#{${key}}`, data[key])
    });
    return content;
}

async function emailHelper(templateName, receiverEmail, data){
    try{
        console.log(process.cwd());
        const templatePath = path.join(process.cwd(),"util","email_templates",`${templateName}.html`);
        console.log(templatePath);
        let content = await fs.promises.readFile(templatePath, "utf-8");
        content = replaceContent(content, data);
        console.log(content);

        const emailDetails = {
            from: "Abhishek <onboarding@resend.dev>",
            to: "abhishek.goel_1@scaler.com",
            subject: "Mail from ScalerShows",
            text: "Hello World",
            html: content
        }

        //send email
        const response =await resend.emails.send(emailDetails);
        console.log(response);

        
    }catch(err){
        console.log(err);
    }
}

// await emailHelper("otp", "test@test.com", {name: "John", otp: "123456"});

export default emailHelper;






