import {useState} from 'react'

import ImageComponent from '@/components/imageComponent/ImageComponent'

import {Section} from '@/modules/home/hero/HeroElements'

import {
  Container,
  BtnWrap,
  Content,
  Title,
  ActiveContent,
  Wrapper,
  TextContent,
  ImageWrap,
  Button,
  ButtonActive,
} from './DevLeadElements'

import ImageActive_1 from '/public/images/devices-image.jpeg'
import ImageActive_3 from '/public/images/landing-templates.jpeg'
import ImageActive_2 from '/public/images/optimization-image.jpeg'

const DevLead = () => {
  const [active, setActive] = useState(0)
  return (
    <Section>
      <Container>
        <Content>
          <Title style={{marginBottom: '0.5em'}}>
            Top Lead Gen Case Studies
          </Title>
          <p>
            Lead generation has changed a lot over the years. Getting people
            interested in your business isn&apos;t as simple as it once was. Our
            marketing experts create modern, leading-edge marketing strategies
            producing the results your business needs now and in the long term.
          </p>
          <BtnWrap>
            <Button
              onClick={() => setActive(0)}
              className={active == 0 ? 'active' : null}
              data-clog-click
            >
              Transform to digital
            </Button>
            <Button
              onClick={() => setActive(1)}
              className={active == 1 ? 'active' : null}
              data-clog-click
            >
              Prepare for a workforce transformation
            </Button>
            <Button
              onClick={() => setActive(2)}
              className={active == 2 ? 'active' : null}
              data-clog-click
            >
              Optimize the deal
            </Button>
          </BtnWrap>
        </Content>
        <ActiveContent>
          <Wrapper className={active == 0 && 'is_display'}>
            <ImageWrap>
              <ImageComponent src={ImageActive_1} height={300} alt="Computer" />
            </ImageWrap>
            <TextContent>
              <h2>Top Lead Gen Case Studies</h2>
              <p>
                Lead generation has changed a lot over the years. Getting people
                interested in your business isn&apos;t as simple as it once was.
                Our marketing experts create modern, leading-edge marketing
                strategies producing the results your business needs now and in
                the long term.
              </p>
              <ButtonActive href="/contact" data-clog-click>
                Learn more
              </ButtonActive>
            </TextContent>
          </Wrapper>
          <Wrapper className={active == 1 && 'is_display'}>
            <TextContent>
              <h2>Top Lead Gen Case Studies</h2>
              <p>
                Lead generation has changed a lot over the years. Getting people
                interested in your business isn&apos;t as simple as it once was.
                Our marketing experts create modern, leading-edge marketing
                strategies producing the results your business needs now and in
                the long term.
              </p>
              <ButtonActive href="/contact" data-clog-click>
                Learn more
              </ButtonActive>
            </TextContent>
            <ImageWrap>
              <ImageComponent src={ImageActive_2} height={300} alt="Computer" />
            </ImageWrap>
          </Wrapper>
          <Wrapper className={active == 2 && 'is_display'}>
            <ImageWrap>
              <ImageComponent src={ImageActive_3} height={300} alt="Computer" />
            </ImageWrap>
            <TextContent>
              <h2>Top Lead Gen Case Studies</h2>
              <p>
                Lead generation has changed a lot over the years. Getting people
                interested in your business isn&apos;t as simple as it once was.
                Our marketing experts create modern, leading-edge marketing
                strategies producing the results your business needs now and in
                the long term.
              </p>
              <ButtonActive href="/contact" data-clog-click>
                Learn more
              </ButtonActive>
            </TextContent>
          </Wrapper>
        </ActiveContent>
      </Container>
    </Section>
  )
}

export default DevLead
