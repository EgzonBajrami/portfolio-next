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

const sendMail = (data:RequestInterface) => {

  return {
    subject: `Request from ${data.name}`,
    text: `txt ${data.name}`,
    html: `
      <h1>Quote request from ${data.email}</h1>
      ${data.request}`
  }
}
interface RequestInterface{
  name:string,
  email:string,
  request:string
}

export async function POST(request:NextRequest){
    const connected =await  request.json();


    const body = sendMail(connected.data);
    const info = await transporter.sendMail({
      from: process.env.EMAIL,
      to:  process.env.RECEIVING,
      subject: body.subject,
      text: body.text,
      html: body.html,
    })

    return NextResponse.json({info});
}