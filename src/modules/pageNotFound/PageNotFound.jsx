import React from 'react'

import {ButtonPrimary} from '@/components/button/ButtonElements'
import ImageComponent from '@/components/imageComponent/ImageComponent'

import {Section} from '@/modules/home/hero/HeroElements'

import {
  Container,
  Content,
  ImageContainer,
  TextWrap,
} from './PageNotFoundElements'

import not_found_illustration from '/public/images/not_found_illustration.png'

const PageNotFound = () => {
  return (
    <Section>
      <Container>
        <Content>
          <ImageContainer>
            <ImageComponent
              src={not_found_illustration}
              alt="3d illustration of number 404 and construction work tools"
              width={400}
              height={300}
            />
          </ImageContainer>
          <TextWrap>
            <h1>Page not found</h1>
            <p>
              You didn&apos;t break the internet, but we can&apos;t find what
              you are looking for.
            </p>
            <ButtonPrimary href="/" data-clog-click>
              Go back home
            </ButtonPrimary>
          </TextWrap>
        </Content>
      </Container>
    </Section>
  )
}

export default PageNotFound
