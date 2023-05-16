// import Image from 'next/image'

import Image from 'next/image'
import Link from 'next/link'

// import ImageComponent from '@/components/imageComponent/ImageComponent'

import {
  GridSection,
  Container,
  TitleWrap,
  Icon,
  GridWrap,
  Cards,
  CardContent,
  TextWrap,
  ImageWrap,
} from './LeadBenefitsElements'

import computerIllustration from 'public/images/computer-illustration.png'
import deviceIllustration from 'public/images/device-illustration.png'

const leadBenefits = () => {
  return (
    <GridSection id="section-1">
      <Container>
        <TitleWrap>
          <h2>We got you covered</h2>
        </TitleWrap>
        <GridWrap>
          <Cards>
            <CardContent>
              <TextWrap>
                <h2>Save with low fees and transparent pricing</h2>
                <p>
                  Keep more of what you earn, keep control of your finances. Our
                  clear, simple, pay-per-transaction pricing is amongst the best
                  on the market and tells you everything upfront.
                </p>
                <Link href="/">
                  Explore <Icon />
                </Link>
              </TextWrap>
            </CardContent>
            <ImageWrap className="card_image_one">
              <Image src={deviceIllustration} alt="" />
            </ImageWrap>
          </Cards>
          <Cards>
            <ImageWrap className="card_image_two">
              <Image src={deviceIllustration} alt="" />
            </ImageWrap>
            <CardContent>
              <TextWrap>
                <h2>Everyone can. Photoshop.</h2>
                <p>
                  Blur. Layer. Colorize. Swap. Combine. Blend. With Photoshop,
                  everyone can.
                </p>
                <Link href="/">
                  Explore <Icon />
                </Link>
              </TextWrap>
            </CardContent>
          </Cards>
          <Cards>
            <CardContent>
              <TextWrap>
                <h2>Save with low fees and transparent pricing</h2>
                <p>
                  Keep more of what you earn, keep control of your finances. Our
                  clear, simple, pay-per-transaction pricing is amongst the best
                  on the market and tells you everything upfront.
                </p>
                <Link href="/">
                  Explore <Icon />
                </Link>
              </TextWrap>
            </CardContent>
            <ImageWrap className="card_image_one">
              <Image src={computerIllustration} alt="" />
            </ImageWrap>
          </Cards>
        </GridWrap>
      </Container>
    </GridSection>
  )
}

export default leadBenefits
