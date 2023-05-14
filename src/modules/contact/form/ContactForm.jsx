import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import {useForm} from 'react-hook-form'

import ButtonLoader from '@/components/loading/buttonLoader/ButtonLoader'
import Modal from '@/components/modal/Modal'

import HeaderContent from '../content/HeaderContent'
import {
  Section,
  Container,
  Content,
  FormControl,
  Title,
  Wrap,
  Field,
  Checkbox,
  List,
} from './ContactFormElement'

import axios from 'axios'

const ContactForm = () => {
  const [isLoading, setLoading] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [countries, setCountries] = useState([])

  const goToTop = () => {
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    const countryData = require('@/data/country.json')
    setCountries(countryData)
  }, [])

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm()

  const notify = () => {
    // toast.error('An error occurred while submitting the form.', {
    //   duration: 8000,
    //   position: 'bottom-center',
    //   iconTheme: {
    //     primary: '#991212',
    //     secondary: '#fff',
    //   },
    //   // Aria
    //   ariaProps: {
    //     role: 'status',
    //     'aria-live': 'error',
    //   },
    // })
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

    try {
      const response = await axios(config)
      console.log(response)
      if (response.status == 200) {
        reset()
        goToTop()
        setModalOpen(true)
      }
    } catch (err) {
      console.error(err)
      // alert('An error occurred while submitting the form.')
      notify()
    }
    setLoading(false)
  }

  return (
    <Section>
      <Container>
        <HeaderContent />
        {!modalOpen && (
          <Content>
            <FormControl onSubmit={handleSubmit(onSubmit)} role="submit">
              <Title>
                Just fill out the form and we will contact you as soon as
                possible.
              </Title>
              <Wrap>
                <Field data-role="control-group">
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
                    aria-required="true"
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
                <Field data-role="control-group">
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
                    aria-required="true"
                    aria-invalid={errors.lastName ? 'true' : 'false'}
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
                <Field data-role="control-group">
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
                <Field data-role="control-group">
                  <label
                    className={errors.email ? 'got_error' : ''}
                    htmlFor="email"
                  >
                    Email*
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="regular_input"
                    aria-required="true"
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
                <Field data-role="control-group">
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
              <Wrap>
                <Field data-role="control-group">
                  <label
                    className={errors.country ? 'got_error' : ''}
                    htmlFor="country"
                  >
                    Country*
                  </label>
                  <select
                    id="country"
                    type="text"
                    name="country"
                    className="regular_input"
                    aria-invalid={errors.country ? 'true' : 'false'}
                    {...register('country', {
                      required: {
                        value: true,
                        message: 'You must enter your country',
                      },
                      minLength: {
                        value: 2,
                        message: 'You must enter your country',
                      },
                    })}
                  >
                    <option value="" hidden aria-hidden="true"></option>
                    {countries.map((item) => {
                      return <option key={item.country}>{item.country}</option>
                    })}
                  </select>
                  {errors.country && (
                    <span className="got_error_message" role="alert">
                      {errors?.country?.message}
                    </span>
                  )}
                </Field>
              </Wrap>
              <fieldset className="wrapper">
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
              </fieldset>
              <Wrap>
                <Field data-role="control-group">
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
                    aria-invalid={errors.message ? 'true' : 'false'}
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
                <fieldset data-role="control-group">
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
