import {NextSeo} from 'next-seo'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import {useEffect, useState} from 'react'
import {useForm} from 'react-hook-form'
import {ToastContainer, toast} from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import ButtonLoader from '@/components/loading/buttonLoader/ButtonLoader'
import PageLoader from '@/components/loading/pageLoader/PageLoader'

const Modal = dynamic(() => import('../../../components/modal/Modal'), {
  loading: () => <PageLoader />,
})

import HeaderContent from '../content/HeaderContent'
import {
  Section,
  Container,
  FormWrap,
  Form,
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
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
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
    toast.error('An error occurred while submitting the form.', {
      position: toast.POSITION.BOTTOM_CENTER,
      role: 'alert',
      'aria-live': 'error',
      className: 'toast',
    })
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
      notify()
    }
    setLoading(false)
  }

  return (
    <>
      <NextSeo
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1, maximum-scale=1"',
          },
        ]}
      />
      <Section modalOpen={modalOpen}>
        <ToastContainer
          autoClose={5000}
          closeButton={false}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          role="alert"
          theme="light"
        />
        {!modalOpen ? (
          <>
            <Container>
              <HeaderContent />
              <FormWrap>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Wrap>
                    <Field data-role="control-group">
                      <label htmlFor="first-name">First Name*</label>
                      <input
                        id="first-name"
                        type="text"
                        name="first-name"
                        className={
                          errors.firstName
                            ? 'got_error regular_input'
                            : 'regular_input'
                        }
                        aria-required="true"
                        aria-invalid={errors.firstName ? 'true' : 'false'}
                        {...register('firstName', {
                          required: {
                            value: true,
                            message: 'Please enter your name',
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
                      <label htmlFor="last-name">Last Name*</label>
                      <input
                        id="last-name"
                        type="text"
                        name="last-name"
                        className={
                          errors.lastName
                            ? 'got_error regular_input'
                            : 'regular_input'
                        }
                        aria-required="true"
                        aria-invalid={errors.lastName ? 'true' : 'false'}
                        {...register('lastName', {
                          required: {
                            value: true,
                            message: 'Please enter your last name',
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
                      <label htmlFor="company-name">Company/Organization</label>
                      <input
                        id="company-name"
                        type="text"
                        name="company-name"
                        className={
                          errors.companyName
                            ? 'got_error regular_input'
                            : 'regular_input'
                        }
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
                      <label htmlFor="email">Work email*</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        className={
                          errors.email
                            ? 'got_error regular_input'
                            : 'regular_input'
                        }
                        aria-required="true"
                        aria-invalid={errors.email ? 'true' : 'false'}
                        {...register('email', {
                          required: {
                            value: true,
                            message: 'Please provide an email',
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
                      <label htmlFor="country">Country*</label>
                      <div className="select_wrap">
                        <select
                          id="country"
                          type="text"
                          name="country"
                          className={
                            errors.country
                              ? 'got_error regular_input'
                              : 'regular_input'
                          }
                          aria-required="true"
                          aria-invalid={errors.country ? 'true' : 'false'}
                          {...register('country', {
                            required: {
                              value: true,
                              message: 'Please let us know where you are from',
                            },
                            minLength: {
                              value: 2,
                              message: 'Please let us know where you are from',
                            },
                          })}
                        >
                          <option
                            value=""
                            hidden={true}
                            disabled={true}
                            aria-hidden={true}
                            selected
                          ></option>
                          {countries.map((item) => {
                            return (
                              <option key={item.country}>{item.country}</option>
                            )
                          })}
                        </select>
                      </div>
                      {errors.country && (
                        <span className="got_error_message" role="alert">
                          {errors?.country?.message}
                        </span>
                      )}
                    </Field>
                  </Wrap>
                  <fieldset className="wrapper">
                    <h2 className="services_title">
                      How can our team help you? (check all that apply)
                    </h2>
                    <List>
                      <li>
                        <Checkbox>
                          <input
                            id="webDevelopment"
                            type="checkbox"
                            name="web-development"
                            placeholder="Web Development"
                            {...register('web_development', {})}
                          />
                          <label htmlFor="webDevelopment">
                            Web Development
                          </label>
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
                            id="seo"
                            type="checkbox"
                            placeholder="SEO"
                            {...register('seo', {})}
                          />
                          <label htmlFor="seo">SEO</label>
                        </Checkbox>
                      </li>
                      <li>
                        <Checkbox>
                          <input
                            id="optimization"
                            type="checkbox"
                            name="optimization-accessibility"
                            placeholder="Conversion rate optimization"
                            {...register('conversion_rate_optimization', {})}
                          />
                          <label htmlFor="optimization">
                            Conversion rate optimization
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
                        Anything else? (questions/comments)
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
                  <Field>
                    <label className="statement">
                      By registering, you confirm that you agree to the
                      processing of your personal data by Atalaso as described
                      in the{' '}
                      <Link className="link" href="/privacy-policy">
                        Privacy Policy
                      </Link>
                      .
                    </label>
                  </Field>
                  <Checkbox>
                    <fieldset data-role="control-group">
                      <input
                        id="mailPolicy"
                        type="checkbox"
                        name="mail-policy"
                        className="mail_policy_checkbox"
                        {...register('mailPolicy', {})}
                      />
                      <label htmlFor="mailPolicy" className="mail_policy_label">
                        Get emails from Atalaso about products, services,
                        updates, industry news, and events. If you change your
                        mind, you can unsubscribe at any time.
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
                </Form>
              </FormWrap>
            </Container>
          </>
        ) : (
          <Modal
            onClick={() => {
              setModalOpen(false)
            }}
            className={modalOpen ? 'modal open' : 'modal'}
          />
        )}
      </Section>
    </>
  )
}

export default ContactForm
