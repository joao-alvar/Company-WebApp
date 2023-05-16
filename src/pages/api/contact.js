import nodemailer from 'nodemailer'

export default async function verification(req, res) {
  const {
    firstName,
    lastName,
    companyName,
    email,
    phone,
    country,
    advertising_seo,
    paid_search,
    web_development,
    optimization_accessibility,
    message,
    mailPolicy,
  } = req.body

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_USER,
      pass: process.env.NEXT_PUBLIC_PASS,
    },
  })

  // Nodemailer
  try {
    await transporter.sendMail({
      from: email,
      to: process.env.NEXT_PUBLIC_USER,
      subject: `Contact form submission from ${firstName} ${lastName}`,
      html: `<p>You have a new contact form submission</p><br>
      <p><strong>First Name: </strong> ${firstName} </p><br>
      <p><strong>Last Name: </strong> ${lastName} </p><br>
      <p><strong>Company/Organization name: </strong> ${companyName} </p><br>
      <p><strong>Email: </strong> ${email} </p><br>
      <p><strong>Phone: </strong> ${phone} </p><br>
      <p><strong>Country: </strong> ${country} </p><br>
      <p><strong>Services Advertising and/or SEO: </strong> ${advertising_seo} </p><br>
      <p><strong>Services Paid Search: </strong> ${paid_search} </p><br>
      <p><strong>Services Web Development: </strong> ${web_development} </p><br>
      <p><strong>Services Optimization and Accessibility: </strong> ${optimization_accessibility} </p><br>
      <p><strong>Message: </strong> ${message} </p><br>
      <p><strong>Email policy: </strong> ${mailPolicy} </p><br>
      `,
    })

    console.log('Message Sent')
  } catch (err) {
    console.log(err)
    res.status(400).json(req.body)
  }
  res.status(200).json(req.body)
}
