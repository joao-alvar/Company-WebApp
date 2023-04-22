import Image from 'next/image'
import Link from 'next/link'

import {Section} from '@/modules/home/hero/HeroElements'

import {Container, ImageWrap, Content, Button} from './DevWallElements'

import DesignTemplate from '/public/images/DesignTemplate.jpeg'

const DevWall = () => {
  return (
    <Section>
      <Container>
        <ImageWrap>
          <Image src={DesignTemplate} alt="something" />
        </ImageWrap>
        <Content>
          <h2>Top Lead Gen Case Studies</h2>
          <p>
            Lead generation has changed a lot over the years. Getting people
            interested in your business isn&apos;t as simple as it once was. Our
            marketing experts create modern, leading-edge marketing strategies
            producing the results your business needs now and in the long term.
          </p>
          <Link href="/">
            <Button>Get started</Button>
          </Link>
        </Content>
      </Container>
    </Section>
  )
}

export default DevWall
