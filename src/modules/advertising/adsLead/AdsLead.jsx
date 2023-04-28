import Image from 'next/image'
import Link from 'next/link'

import {Section} from '@/modules/home/hero/HeroElements'

import {
  Container,
  Wrapper,
  ImageWrap,
  Content,
  StyledButton,
} from './AdsLeadElements'

import Ads_1 from '/public/images/Ads_1.jpeg'

const AdsLead = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <ImageWrap>
            <Image
              src={Ads_1}
              height={300}
              alt=""
              style={{
                borderBottomRightRadius: '8px',
                borderTopRightRadius: '8px',
              }}
            />
          </ImageWrap>
          <Content>
            <span>Electric vehicles</span>
            <h2>Electric vehicles will never be the same</h2>
            <p>
              Ultium. The innovation powering General Motors&apos; expanding
              lineup of EVs for every person and every purpose. Explore the
              benefits of choosing an EV powered by Ultium.
            </p>
            <Link href="/">
              <StyledButton>Learn more</StyledButton>
            </Link>
          </Content>
        </Wrapper>
        <Wrapper className='bottom_wrapper' style={{background: '#f2f2f2'}}>
          <Content className='bottom_content' style={{justifyContent: 'end',}}>
            <span>Electric vehicles</span>
            <h2>Electric vehicles will never be the same</h2>
            <p>
              Ultium. The innovation powering General Motors&apos; expanding
              lineup of EVs for every person and every purpose. Explore the
              benefits of choosing an EV powered by Ultium.
            </p>
            <Link href="/">
              <StyledButton>Learn more</StyledButton>
            </Link>
          </Content>
          <ImageWrap style={{justifyContent: 'end'}}>
            <Image
              src={Ads_1}
              height={300}
              alt=""
              style={{
                borderTopLeftRadius: '8px',
                borderBottomLeftRadius: '8px',
              }}
            />
          </ImageWrap>
        </Wrapper>
      </Container>
    </Section>
  )
}

export default AdsLead
