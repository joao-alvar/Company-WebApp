import Link from 'next/link'

import ImageComponent from '@/components/imageComponent/ImageComponent'

import {Section} from '@/modules/home/hero/HeroElements'
import {
  Button,
  IconArrow,
} from '@/modules/web-development/callToAction/CallToActionElements'

import {Container, Content, Wrapper, ImageWrap} from './SeoCallToActionElements'

import Image from 'public/images/business-laptop-typing.jpg'

const SeoCallToAction = () => {
  return (
    <>
      <Section>
        <Container>
          <Wrapper>
            <ImageWrap>
              <ImageComponent
                src={Image}
                alt="Office woman typing in laptop and people chatting in background"
                draggable={false}
              />
            </ImageWrap>
            <Content>
              <h2>Get a free audition</h2>
              <p>
                If you&apos;ve made it this far, you must be at least a little
                curious, contact us and take the first step toward your goals.
              </p>
              <Button as={Link} href="/contact" data-clog-click>
                Let&apos;s talk <IconArrow />
              </Button>
            </Content>
          </Wrapper>
        </Container>
      </Section>
    </>
  )
}

export default SeoCallToAction
