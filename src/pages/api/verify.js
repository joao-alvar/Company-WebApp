// import axios from 'axios'
import axios from 'axios'
import fetch from 'node-fetch'

export default async function handler(req, res) {
  const {body, method} = req
  const {recaptchaToken} = body

  // ReCAPTCHA

  // ReCAPTCHA
  if (method === 'POST') {
    try {
      // Sending secret key and response recaptchaToken to Google Recaptcha API for authentication.
      const response = await axios(`${process.env.NEXT_PUBLIC_CAPTCHA_URL}`, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        },
        body: `response=${recaptchaToken}&secret=${process.env.NEXT_PUBLIC_HCAPTCHA_SECRET_KEY}`,
        method: 'POST',
      })

      if (response.status === 200) {
        // Return 200 if everything is successful
        // resolve(true)
        res.json({
          success: true,
          message: 'Your verification was completed.',
          data: response.data,
        })
      } else {
        res.json({
          success: false,
          message: 'Something happened during verification process',
          data: response.data,
        })
      }
    } catch (error) {
      // Handle any errors that occur during the reCAPTCHA verification process
      console.error(error)
      res.status(400).json(error)
      // res.status(500).send('Error verifying reCAPTCHA')
    }
  }
  res.status(200).json(req)
}

//   if (method === 'POST') {
//     // If email or captcha are missing return an error
//     if (!recaptchaToken) {
//       return res.status(422).json({
//         message: 'Unprocessable request, please provide the required fields',
//       })
//     }

//     try {
//       // Ping the google recaptcha verify API to verify the captcha code you received
//       const response = await fetch(
//         `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
//         {
//           headers: {
//             'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
//           },
//           method: 'POST',
//         }
//       )
//       if (response.success == true) {
//         // Replace this with the API that will save the data received
//         // to your backend
//         await sleep()
//         // Return 200 if everything is successful
//         return res.status(200).send('OK')
//       }
//       return res.status(422).json({
//         message: 'Unprocessable request, Invalid captcha code',
//       })
//     } catch (error) {
//       // Handle any errors that occur during the reCAPTCHA verification process
//       console.error(error)
//       // res.status(400).json(error)
//       return res.status(422).json({message: 'Something went wrong'})
//     }
//   }
//   return res.status(404).send('Not found')
// }
