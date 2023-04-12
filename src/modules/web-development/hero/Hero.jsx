import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import {HeroBtn, Section} from '@/modules/home/hero/HeroElements'

import {Container, Content, HeroLink} from './HeroElements'

import DevelopmentBg from 'public/images/DevelopmentHero.jpeg'

const Hero = () => {
  return (
    <Section>
      <Container>
        <Image src={DevelopmentBg} />
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
          <HeroLink href="/contact">
            <HeroBtn>Get started</HeroBtn>
          </HeroLink>
        </Content>
      </Container>
    </Section>
  )
}

export default Hero