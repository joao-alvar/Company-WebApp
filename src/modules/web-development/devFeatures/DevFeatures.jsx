import React from 'react'

import ImageComponent from '@/components/imageComponent/ImageComponent'

import {Section} from '@/modules/home/hero/HeroElements'

import {
  Container,
  Wrapper,
  ImageContainer,
  Content,
} from './DevFeaturesElements'

import Image_1 from 'public/images/business-teamwork.png'
import Image_2 from 'public/images/network-illustration.png'
import Image_3 from 'public/images/trend-illustration.png'

const DevFeatures = () => {
  return (
    <Section>
      <Container>
        <Wrapper className="first_card">
          <ImageContainer className="first_card_image">
            <ImageComponent src={Image_1} alt="" width={450} height={450} />
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
        <Wrapper className="content_reverse">
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
            <ImageComponent src={Image_2} alt="" width={450} height={400} />
          </ImageContainer>
        </Wrapper>
        <Wrapper>
          <ImageContainer>
            <ImageComponent src={Image_3} alt="" width={400} height={400} />
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
