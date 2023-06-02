import React from 'react'

import ImageComponent from '@/components/imageComponent/ImageComponent'

import {Section} from '@/modules/home/hero/HeroElements'

import {
  Container,
  Wrapper,
  GridBanner,
  ImageWrap,
  Content,
  ActionLink,
  Button,
  IconArrow,
} from './CallToActionElements'

import Bg from 'public/images/Planning.jpeg'

const CallToAction = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <GridBanner>
            <ImageWrap>
              <ImageComponent src={Bg} alt="" priority={true} />
            </ImageWrap>
          </GridBanner>
          <GridBanner>
            <ActionLink href="/contact">
              <Content>
                <h2>Ready to get started?</h2>
                <p>Join 20,000+ innovative businesses – big and small</p>
                <Button href="/contact" data-clog-click>
                  Start now <IconArrow />
                </Button>
              </Content>
            </ActionLink>
          </GridBanner>
        </Wrapper>
      </Container>
    </Section>
  )
}

export default CallToAction
