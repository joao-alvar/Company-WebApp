import Link from 'next/link'
import React, {useRef, useState} from 'react'
// import ReCAPTCHA from 'react-google-recaptcha'
import {useForm} from 'react-hook-form'
import toast, {Toaster} from 'react-hot-toast'

import ButtonLoader from '@/components/buttonLoader/ButtonLoader'
import Modal from '@/components/modal/Modal'

import {Section} from '@/modules/home/hero/HeroElements'

import {
  Container,
  Content,
  FormControl,
  Wrap,
  Field,
  Checkbox,
  List,
  CapContainer,
} from './ContactFormElement'

import HCaptcha from '@hcaptcha/react-hcaptcha'
import axios from 'axios'

const ContactForm = () => {
  const SITE_KEY = process.env.NEXT_PUBLIC_HCAPTCHA_SECRET_KEY
  const captchaRef = useRef(null)
  const [isVerified, setIsVerified] = useState(true)
  const [isLoading, setLoading] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm()
  const notify = () => {
    toast.error('An error occurred, please verify that you are not a robot.', {
      duration: 8000,
      position: 'bottom-center',
      className: 'toast_style',
      iconTheme: {
        primary: '#991212',
        secondary: '#fff',
      },
      // Aria
      ariaProps: {
        role: 'status',
        'aria-live': 'error',
      },
    })
  }

  const onCaptchaChange = async (formData) => {
    const recaptchaToken = '5002'
    console.log('reCAPTCHA token:', recaptchaToken)
    recaptchaToken
    const config = {
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/verify`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: formData,
    }

    try {
      const response = await axios(config)

      // if (response.data.success === true) {
      if (response.status == 200) {
        console.log('front response', response)
        toast.success(response.data.message, {
          duration: 8000,
          position: 'bottom-center',
          className: 'toast_style',
          iconTheme: {
            primary: '#66A15A',
            secondary: '#fff',
          },
          // Aria
          ariaProps: {
            role: 'status',
            'aria-live': 'error',
          },
        })
        setIsVerified(true)
      } else {
        console.error(response)
        // alert(
        //   'There was a problem sending your message. Please try again later.'
        // )
        toast.error(
          'There was a problem sending your message. Please try again later.',
          {
            duration: 8000,
            position: 'bottom-center',
            className: 'toast_style',
            iconTheme: {
              primary: '#991212',
              secondary: '#fff',
            },
            // Aria
            ariaProps: {
              role: 'status',
              'aria-live': 'error',
            },
          }
        )
      }
    } catch (err) {
      console.error(err)

      if (err.code === 'ECONNABORTED') {
        // alert(
        //   'The server is taking too long to respond. Please try again later.'
        // )
        toast.error(
          'The server is taking too long to respond. Please try again later.',
          {
            duration: 8000,
            position: 'bottom-center',
            className: 'toast_style',
            iconTheme: {
              primary: '#991212',
              secondary: '#fff',
            },
            // Aria
            ariaProps: {
              role: 'status',
              'aria-live': 'error',
            },
          }
        )
      } else if (err.response) {
        console.error(err.response)
        // alert(
        //   'There was a problem sending your message. Please check your inputs and try again.'
        // )
        toast.error(
          'There was a problem sending your message. Please check your inputs and try again.',
          {
            duration: 8000,
            position: 'bottom-center',
            className: 'toast_style',
            iconTheme: {
              primary: '#991212',
              secondary: '#fff',
            },
            // Aria
            ariaProps: {
              role: 'status',
              'aria-live': 'error',
            },
          }
        )
      } else {
        toast.error(
          'There was a problem connecting to the server. Please check your internet connection and try again.',
          {
            duration: 8000,
            position: 'bottom-center',
            className: 'toast_style',
            iconTheme: {
              primary: '#991212',
              secondary: '#fff',
            },
            // Aria
            ariaProps: {
              role: 'status',
              'aria-live': 'error',
            },
          }
        )
      }
    }
  }

  const onSubmit = async (data) => {
    setLoading(true)
    const config = {
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    }
    if (isVerified === true) {
      try {
        const response = await axios(config)
        console.log(response)
        if (response.status == 200) {
          reset()
          setModalOpen(true)
        }
      } catch (err) {
        console.error(err)
        // alert('An error occurred while submitting the form.')
        toast.error('An error occurred while submitting the form.', {
          duration: 8000,
          position: 'bottom-center',
          className: 'toast_style',
          iconTheme: {
            primary: '#991212',
            secondary: '#fff',
          },
          // Aria
          ariaProps: {
            role: 'status',
            'aria-live': 'error',
          },
        })
      }
      setLoading(false)
    } else {
      setLoading(false)
      notify()
    }
  }

  return (
    <Section>
      <Container>
        {/* <button
          onClick={() => {
            captchaVerification()
          }}
        > */}
          Hello
        </button>
        {!modalOpen && (
          <Content>
            <Toaster
              toastOptions={{
                style: {
                  border: '1px solid #880707',
                  padding: '16px',
                  color: '#880707',
                  fontSize: '1.2em',
                  fontFamily: 'Overpass',
                  fontWeight: '600',
                },
              }}
            />
            <FormControl onSubmit={handleSubmit(onSubmit)}>
              <Wrap>
                <Field>
                  <label
                    className={errors.firstName ? 'got_error' : ''}
                    htmlFor="first-name"
                  >
                    First Name*
                  </label>
                  <input
                    id="first-name"
                    type="text"
                    name="first-name"
                    className="regular_input"
                    aria-invalid={errors.firstName ? 'true' : 'false'}
                    {...register('firstName', {
                      required: {
                        value: true,
                        message: 'You must enter your name',
                      },
                      maxLength: {
                        value: 30,
                        message: 'This is too long',
                      },
                    })}
                  />
                  {errors.firstName && (
                    <span className="got_error_message" role="alert">
                      {errors?.firstName?.message}
                    </span>
                  )}
                </Field>
                <Field>
                  <label
                    className={errors.lastName ? 'got_error' : ''}
                    htmlFor="last-name"
                  >
                    Last Name*
                  </label>
                  <input
                    id="last-name"
                    type="text"
                    name="last-name"
                    className="regular_input"
                    {...register('lastName', {
                      required: {
                        value: true,
                        message: 'You must enter your last name',
                      },
                      maxLength: {
                        value: 40,
                        message: 'This is too long',
                      },
                    })}
                  />
                  {errors.lastName && (
                    <span className="got_error_message" role="alert">
                      {errors?.lastName?.message}
                    </span>
                  )}
                </Field>
              </Wrap>
              <Wrap>
                <Field>
                  <label
                    className={errors.companyName ? 'got_error' : ''}
                    htmlFor="company-name"
                  >
                    Company/Organization
                  </label>
                  <input
                    id="company-name"
                    type="text"
                    name="company-name"
                    className="regular_input"
                    aria-invalid={errors.companyName ? 'true' : 'false'}
                    {...register('companyName', {
                      maxLength: {
                        value: 50,
                        message: 'This is too long',
                      },
                    })}
                  />
                  {errors.companyName && (
                    <span className="got_error_message" role="alert">
                      {errors?.companyName?.message}
                    </span>
                  )}
                </Field>
              </Wrap>
              <Wrap>
                <Field>
                  <label
                    className={errors.email ? 'got_error' : ''}
                    htmlFor="email"
                  >
                    Email*
                  </label>
                  <input
                    id="email"
                    type="text"
                    name="email"
                    className="regular_input"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    {...register('email', {
                      required: {
                        value: true,
                        message: 'You must enter your email',
                      },
                      pattern: {
                        value:
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: 'Please enter a valid email',
                      },
                    })}
                  />
                  {errors.email && (
                    <span className="got_error_message" role="alert">
                      {errors?.email?.message}
                    </span>
                  )}
                </Field>
                <Field>
                  <label
                    className={errors.Phone ? 'got_error' : ''}
                    htmlFor="phone"
                  >
                    Phone number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    className="regular_input"
                    aria-invalid={errors.phone ? 'true' : 'false'}
                    {...register('phone', {
                      maxLength: {
                        value: 25,
                        message: 'This is too long',
                      },
                      minLength: {
                        value: 6,
                        message: 'This is too short',
                      },
                    })}
                  />
                  {errors.phone && (
                    <span className="got_error_message" role="alert">
                      {errors?.phone?.message}
                    </span>
                  )}
                </Field>
              </Wrap>
              <div className="wrapper">
                <h2>What you are looking for? (Check all that apply)</h2>
                <List>
                  <li>
                    <Checkbox>
                      <input
                        id="seo"
                        type="checkbox"
                        placeholder="Advertising and/or SEO"
                        {...register('advertising_seo', {})}
                      />
                      <label htmlFor="seo">Advertising and/or SEO</label>
                    </Checkbox>
                  </li>
                  <li>
                    <Checkbox>
                      <input
                        id="paidSearch"
                        type="checkbox"
                        name="paid-search"
                        placeholder="Paid Search"
                        {...register('paid_search', {})}
                      />
                      <label htmlFor="paidSearch">Paid Search</label>
                    </Checkbox>
                  </li>
                  <li>
                    <Checkbox>
                      <input
                        id="webDevelopment"
                        type="checkbox"
                        name="web-development"
                        placeholder="Web Development"
                        {...register('web_development', {})}
                      />
                      <label htmlFor="webDevelopment">Web Development</label>
                    </Checkbox>
                  </li>
                  <li>
                    <Checkbox>
                      <input
                        id="optimization"
                        type="checkbox"
                        name="optimization-accessibility"
                        placeholder="Optimization and Accessibility"
                        {...register('optimization_accessibility', {})}
                      />
                      <label htmlFor="optimization">
                        Optimization and Accessibility
                      </label>
                    </Checkbox>
                  </li>
                </List>
              </div>
              <Wrap>
                <Field>
                  <label
                    className={errors.Message ? 'got_error' : ''}
                    htmlFor="message"
                  >
                    Briefly describe your project
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    spellCheck="false"
                    name="message"
                    aria-invalid="false"
                    {...register('message', {
                      maxLength: {
                        value: 1500,
                        message:
                          "Your message can't be longer than 1500 characters",
                      },
                      minLength: {
                        value: 50,
                        message: 'Your message must be longer than this!',
                      },
                    })}
                  />
                  {errors.message && (
                    <span className="got_error_message" role="alert">
                      {errors?.message?.message}
                    </span>
                  )}
                </Field>
              </Wrap>
              <Checkbox>
                <fieldset data-role="controlgroup">
                  <input
                    id="mailPolicy"
                    type="checkbox"
                    name="mail-policy"
                    className="mail_policy_checkbox"
                    {...register('mailPolicy', {})}
                  />
                  <label htmlFor="mailPolicy">
                    Get emails from Atalaso about product updates, industry
                    news, and events. If you change your mind, you can
                    unsubscribe at any time. Data will be processed according to
                    our
                    <Link className="link" href="/privacy-policy">
                      {' '}
                      Privacy Policy
                    </Link>
                    .
                  </label>
                </fieldset>
              </Checkbox>
              <CapContainer>
                <HCaptcha
                  sitekey={SITE_KEY}
                  onVerify={onCaptchaChange}
                  ref={captchaRef}
                />
                {/* <ReCAPTCHA
                  sitekey={SITE_KEY}
                  onChange={onCaptchaChange}
                  ref={captchaRef}
                /> */}
              </CapContainer>
              <button
                className="button"
                type="submit"
                disabled={isLoading}
                data-clog-click
              >
                {isLoading ? <ButtonLoader /> : 'Submit'}
              </button>
            </FormControl>
          </Content>
        )}
        <Modal
          onClick={() => {
            setModalOpen(false)
          }}
          className={modalOpen ? 'modal open' : 'modal'}
        />
      </Container>
    </Section>
  )
}

export default ContactForm
