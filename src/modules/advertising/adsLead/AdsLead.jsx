import ImageComponent from '@/components/imageComponent/ImageComponent'

import {Section} from '@/modules/home/hero/HeroElements'

import {Container, Title, Wrapper, ImageWrap, Content} from './AdsLeadElements'

import Image from 'public/images/carpenter-looking.jpeg'

const AdsList = () => {
  return (
    <Section>
      <Container>
        <Title>Helping you scale at every stage</Title>
        <Wrapper>
          <ImageWrap>
            <ImageComponent
              src={Image}
              alt="Carpenter looking and working on wood"
            />
          </ImageWrap>
          <Content>
            <p>
              Unleash the potential for progress and growth by embracing change
              and adapting to evolving circumstances. The modern landscape
              demands businesses to stay agile and responsive to the shifting
              needs of customers, employees, and the market. By investing in
              innovation and adopting forward-thinking strategies, businesses
              can position themselves as pioneers in their industry and seize
              new opportunities for success.
            </p>
            <p>
              At Atalaso, we are committed to helping businesses thrive in this
              fast-paced era. Our tailored solutions and expert guidance empower
              companies to leverage the latest technologies, optimize processes,
              and capitalize on emerging trends. By embracing digital
              transformation, and continuously seeking innovative solutions,
              businesses can unlock new opportunities, drive competitive
              advantage, and foster sustainable growth.
            </p>
          </Content>
        </Wrapper>
      </Container>
    </Section>
  )
}

export default AdsList
