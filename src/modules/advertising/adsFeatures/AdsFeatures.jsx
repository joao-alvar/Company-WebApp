import Image from 'next/image'
import Link from 'next/link'
import {AiFillCheckCircle} from 'react-icons/ai'

import {Section} from '@/modules/home/hero/HeroElements'
import {Button} from '@/modules/home/lead/LeadElements'

import {
  Container,
  ListWrap,
  ImageWrap,
  StyledList,
  Wrapper,
  Icon,
  LinkWrap,
  // StyledButton,
} from './AdsFeaturesElements'

import Ads_1 from '/public/images/Trend.jpeg'
import Ads_2 from '/public/images/Optimized.jpeg'

const AdsFeatures = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <ListWrap>
            <span>What and how</span>
            <h2>What is Ultium?</h2>
            <StyledList>
              <li>
                <Icon as={AiFillCheckCircle} /> Ultium is a game-changing
                electric vehicle platform
              </li>
              <li>
                <Icon as={AiFillCheckCircle} /> Built on a flexible battery
                architecture
              </li>
              <li>
                <Icon as={AiFillCheckCircle} /> For the production of EVs across
                different vehicle types
              </li>
              <li>
                <Icon as={AiFillCheckCircle} /> With outstanding power, range
                and performance
              </li>
            </StyledList>
          </ListWrap>
          <ImageWrap>
            <Image
              src={Ads_1}
              alt=""
              style={{
                borderBottomRightRadius: '8px',
                borderTopRightRadius: '8px',
              }}
            />
          </ImageWrap>
        </Wrapper>
        <Wrapper>
          <ListWrap>
            <h2>What is Ultium?</h2>
            <StyledList>
              <li>
                <Icon as={AiFillCheckCircle} /> Ultium is a game-changing
                electric vehicle platform
              </li>
              <li>
                <Icon as={AiFillCheckCircle} /> Built on a flexible battery
                architecture
              </li>
              <li>
                <Icon as={AiFillCheckCircle} /> For the production of EVs across
                different vehicle types
              </li>
              <li>
                <Icon as={AiFillCheckCircle} /> With outstanding power, range
                and performance
              </li>
            </StyledList>
          </ListWrap>
          <ImageWrap>
            <Image
              src={Ads_2}
              alt=""
              style={{
                borderBottomRightRadius: '8px',
                borderTopRightRadius: '8px',
              }}
            />
          </ImageWrap>
        </Wrapper>
        <LinkWrap>
          <h2>
            Want to discover more about the benefits of driving an EV powered by
            Ultium Platform?
          </h2>
          <Link href="/">
            <Button>Learn more</Button>
          </Link>
        </LinkWrap>
      </Container>
    </Section>
  )
}

export default AdsFeatures
