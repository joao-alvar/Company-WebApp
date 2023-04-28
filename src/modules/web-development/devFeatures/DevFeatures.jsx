import Image from 'next/image'
import React from 'react'

import {Section} from '@/modules/home/hero/HeroElements'

import {
  Container,
  Wrapper,
  ImageContainer,
  Content,
} from './DevFeaturesElements'

import TrendImg from 'public/images/Trend.jpeg'

const DevFeatures = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <ImageContainer>
            <Image src={TrendImg} alt="" width={500} height={500} />
          </ImageContainer>
          <Content>
            <h2>Something in the way</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
              optio fuga illo repellat, veritatis esse quis consequuntur magni
              asperiores odit molestias provident ducimus eligendi est facere
              suscipit delectus iure facilis!
            </p>
          </Content>
        </Wrapper>
        <Wrapper className='content_reverse'>
          <Content>
            <h2>Something in the way</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
              optio fuga illo repellat, veritatis esse quis consequuntur magni
              asperiores odit molestias provident ducimus eligendi est facere
              suscipit delectus iure facilis!
            </p>
          </Content>
          <ImageContainer>
            <Image src={TrendImg} alt="" width={500} height={500} />
          </ImageContainer>
        </Wrapper>
        <Wrapper>
          <ImageContainer>
            <Image src={TrendImg} alt="" width={500} height={500} />
          </ImageContainer>
          <Content>
            <h2>Something in the way</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
              optio fuga illo repellat, veritatis esse quis consequuntur magni
              asperiores odit molestias provident ducimus eligendi est facere
              suscipit delectus iure facilis!
            </p>
          </Content>
        </Wrapper>
      </Container>
    </Section>
  )
}

export default DevFeatures
