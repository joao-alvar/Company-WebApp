import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import {Section} from '@/modules/home/hero/HeroElements'

import {
  Container,
  Content,
  ImageContainer,
  TextWrap,
  Button,
} from './PageNotFoundElements'

import not_found_illustration from '/public/images/not_found_illustration.png'

const PageNotFound = () => {
  return (
    <Section>
      <Container>
        <Content>
          <ImageContainer>
            <Image
              src={not_found_illustration}
              alt="Group of people around 404 number illustration"
              width={400}
              height={300}
            />
          </ImageContainer>
          <TextWrap>
            <h1>Page not found</h1>
            <p>
              You didn't break the internet, but we can't find what you are
              looking for.
            </p>
            <Button href="https://atalaso.com/" data-clog-click>
              Go back home
            </Button>
          </TextWrap>
        </Content>
      </Container>
    </Section>
  )
}

export default PageNotFound
