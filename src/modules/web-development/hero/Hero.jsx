import {ButtonPrimary} from '@/components/button/ButtonElements'
import ImageComponent from '@/components/imageComponent/ImageComponent'

import {Section} from '@/modules/home/hero/HeroElements'

import {Container, ImgContainer, Content} from './HeroElements'

import DevelopmentBg from 'public/images/DevelopmentHero.jpeg'

const Hero = () => {
  return (
    <Section>
      <Container>
        <Content>
          <p className="pre_title">Development</p>
          <h1>
            Web development has become an essential part of modern society
          </h1>
          <p className="title_secondary_text">
            with the internet serving as a hub for businesses, communication,
            entertainment, and much more. Whether you&apos;re an entrepreneur
            looking to launch an online store, or an established organization
            seeking to improve your online presence, we are here to guide you.
          </p>
          <ButtonPrimary href="/contact" className="button" data-clog-click>
            Get started
          </ButtonPrimary>
        </Content>
        <ImgContainer>
          <ImageComponent
            src={DevelopmentBg}
            alt="Laptop illustration"
            priority
          />
        </ImgContainer>
      </Container>
    </Section>
  )
}

export default Hero
