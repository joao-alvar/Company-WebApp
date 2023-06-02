import {Section} from '@/modules/home/hero/HeroElements'

import {
  Container,
  Content,
  LinkWrap,
  Button,
  SecondButton,
  VideoWrap,
} from './HeroAdsElements'

const HeroAds = () => {
  const handleClickScroll = () => {
    const element = document.querySelector('#seo')

    element?.scrollIntoView({behavior: 'smooth'})
  }
  return (
    <Section>
      <Container>
        <Content>
          <h1>Why choose Atalaso&apos;s expertise as your go to solution?</h1>
          <p>
            As a homeowner, you have plenty of options when it comes to solar.
            Learn what sets ION apart and what you can expect as a customer.
          </p>
          <LinkWrap>
            <Button href="/contact">Get started</Button>
            <SecondButton
              as="button"
              onClick={handleClickScroll}
              isPrimary
              className="button_secondary"
            >
              Learn more
            </SecondButton>
          </LinkWrap>
        </Content>
        <VideoWrap>
          <video
            title="Social media icons floating and passing through"
            autoPlay
            muted
            loop
            playsInline
            poster="images/advertising-hero.png"
          >
            <source
              src="videos/social-media-icons-video.mp4"
              type="video/mp4"
            />
          </video>
        </VideoWrap>
      </Container>
    </Section>
  )
}

export default HeroAds
