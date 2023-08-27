import {ButtonPrimary} from '@/components/button/ButtonElements'
import ImageComponent from '@/components/imageComponent/ImageComponent'

import {Section} from '@/modules/home/hero/HeroElements'

import {Container, ImgContainer, Content} from './HeroElements'

import DevelopmentBg from 'public/images/DevelopmentHero.jpg'

const Hero = () => {
  return (
    <Section>
      <Container>
        <Content>
          <p className="pre_title">Development</p>
          <h1>Transforming businesses for the future</h1>
          <p className="title_secondary_text">
            Turning ideas into innovative software solutions for unparalleled
            success
          </p>
          <ButtonPrimary href="/contact" className="button" data-clog-click>
            Get started
          </ButtonPrimary>
        </Content>
        <ImgContainer>
          <ImageComponent
            src={DevelopmentBg}
            alt="Web development isometric illustration. Two people program on a laptop, usability and performance website header UI layout, and one person is climbing a ladder and another is running"
            priority={true}
          />
        </ImgContainer>
      </Container>
    </Section>
  )
}

export default Hero
