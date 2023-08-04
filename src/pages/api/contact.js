import {NextSeo} from 'next-seo'
;<NextSeo nofollow={true} noindex={true} />

import nodemailer from 'nodemailer'

export default async function verification(req, res) {
  const {
    firstName,
    lastName,
    companyName,
    email,
    phone,
    country,
    seo,
    paid_search,
    web_development,
    conversion_rate_optimization,
    message,
    mailPolicy,
  } = req.body

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER_KEY,
      pass: process.env.PASS_KEY,
    },
  })

  // Nodemailer
  try {
    await transporter.sendMail({
      from: email,
      to: process.env.USER_KEY,
      subject: `Contact form submission from ${firstName} ${lastName}`,
      html: `<p>You have a new contact form submission</p><br>
      <p><strong>First Name: </strong> ${firstName} </p><br>
      <p><strong>Last Name: </strong> ${lastName} </p><br>
      <p><strong>Company/Organization name: </strong> ${companyName} </p><br>
      <p><strong>Email: </strong> ${email} </p><br>
      <p><strong>Phone: </strong> ${phone} </p><br>
      <p><strong>Country: </strong> ${country} </p><br>
      <p><strong>Services Advertising and/or SEO: </strong> ${seo} </p><br>
      <p><strong>Services Paid Search: </strong> ${paid_search} </p><br>
      <p><strong>Services Web Development: </strong> ${web_development} </p><br>
      <p><strong>Services Conversion rate optimization: </strong> ${conversion_rate_optimization} </p><br>
      <p><strong>Message: </strong> ${message} </p><br>
      <p><strong>Email policy: </strong> ${mailPolicy} </p><br>
      `,
    })
  } catch (err) {
    res.status(400).json(req.body)
  }
  res.status(200).json(req.body)
}
