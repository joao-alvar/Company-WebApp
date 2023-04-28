import Link from 'next/link'
import {useForm} from 'react-hook-form'

import {Section} from '@/modules/home/hero/HeroElements'

import {
  Container,
  Content,
  StyledForm,
  Wrap,
  Field,
  Checkbox,
  List,
  CapContainer,
} from './FormElement'

import HCaptcha from '@hcaptcha/react-hcaptcha'

const Form = () => {
  const SITE_KEY = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()
  const onSubmit = (data) => console.log(data)
  function onChange(value) {
    console.log('Captcha value:', value)
  }
  return (
    <Section>
      <Container>
        <Content>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Wrap>
              <Field>
                <label htmlFor="first-name">First Name*</label>
                <input
                  id="first-name"
                  className="regular_input"
                  aria-invalid={errors.firstName ? 'true' : 'false'}
                  {...register('firstName', {required: true, maxLength: 30})}
                />
              </Field>
              {errors.firstName && errors.firstName.type === 'required' && (
                <span role="alert">This is required</span>
              )}
              {errors.firstName && errors.firstName.type === 'maxLength' && (
                <span role="alert">Max length exceeded</span>
              )}
              <Field>
                <label htmlFor="last-name">Last Name*</label>
                <input
                  id="last-name"
                  className="regular_input"
                  {...register('lastName', {
                    required: true,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                />
              </Field>
            </Wrap>
            <Wrap>
              <Field>
                <label htmlFor="email">Email*</label>
                <input
                  id="email"
                  type="text"
                  className="regular_input"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  {...register('email', {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
              </Field>
              {errors.email && errors.email.type === 'required' && (
                <span role="alert">This is required</span>
              )}
              {errors.email && errors.email.type === 'maxLength' && (
                <span role="alert">Max length exceeded</span>
              )}
              <Field>
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  className="regular_input"
                  aria-invalid={errors.phone ? 'true' : 'false'}
                  {...register('phone', {
                    minLength: 6,
                    maxLength: 12,
                  })}
                />
              </Field>
            </Wrap>
            <div className="wrapper">
              {' '}
              <h2>What you are looking for? (Check all that apply)</h2>
              <List>
                <li>
                  <Checkbox>
                    <input
                      id="seo"
                      type="checkbox"
                      placeholder="Services  provided"
                      {...register('Services  provided', {})}
                    />
                    <label htmlFor="seo">Advertising and/or SEO</label>
                  </Checkbox>
                </li>
                <li>
                  <Checkbox>
                    <input
                      id="paidSearch"
                      type="checkbox"
                      placeholder="Services  provided"
                      {...register('Services  provided', {})}
                    />
                    <label htmlFor="paidSearch">Paid Search</label>
                  </Checkbox>
                </li>
                <li>
                  <Checkbox>
                    <input
                      id="webDevelopment"
                      type="checkbox"
                      placeholder="Services  provided"
                      {...register('Services  provided', {})}
                    />
                    <label htmlFor="webDevelopment">Web Development</label>
                  </Checkbox>
                </li>
                <li>
                  <Checkbox>
                    <input
                      id="optimization"
                      type="checkbox"
                      placeholder="Services  provided"
                      {...register('Services  provided', {})}
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
                <label htmlFor="message">Briefly describe your project</label>
                <textarea
                  id="message"
                  rows="6"
                  spellCheck="false"
                  aria-invalid="false"
                  {...register('Message', {})}
                />
              </Field>
            </Wrap>
            <Checkbox>
              <fieldset data-role="controlgroup">
                <input
                  id="mailPolicy"
                  type="checkbox"
                  name="mailPolicy"
                  className="mail_policy_checkbox"
                  {...register('mailPolicy', {})}
                />
                <label htmlFor="mailPolicy">
                  Get emails from Atalaso about product updates, industry news,
                  and events. If you change your mind, you can unsubscribe at
                  any time. Data will be processed according to our
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
                id="test"
                sitekey={SITE_KEY}
                // onVerify={onHCaptchaChange}
              />
            </CapContainer>
            <input className="button" type="submit" />
          </StyledForm>
        </Content>
      </Container>
    </Section>
  )
}

export default Form
