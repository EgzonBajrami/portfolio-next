import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import nodemailer from 'nodemailer'
const transporter = nodemailer.createTransport({
  service:"outlook",
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
})

interface RequestInterface{
  name:string,
  email:string,
  request:string
}

const sendMail = (data:any) => {

  return {
    subject: `Request from ${data.name}`,
    text: `txt ${data.name}`,
    html: `
      <h1>Quote request from ${data.email}</h1>
      ${data.request}`
  }
}


export async function POST(request:NextRequest){
    const connected =await  request.json();
    console.log(process.env.EMAIL);

    const body = sendMail(connected.data);
    const mailData =  {
      from: process.env.EMAIL,
      to:  process.env.RECEIVING,
      subject: body.subject,
      text: body.text,
      html: body.html,
    }

  const result = await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        resolve(info);
      }
    });
  });

  console.log(result);

    return NextResponse.json({result});
}