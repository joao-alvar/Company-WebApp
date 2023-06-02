// import Image from 'next/image'

import Link from 'next/link'

import ImageComponent from '@/components/imageComponent/ImageComponent'

import {
  GridSection,
  Container,
  Icon,
  GridWrap,
  Cards,
  CardContent,
  TextWrap,
  ImageWrap,
} from './LeadBenefitsElements'

import image_2 from 'public/images/office-and-computer-image.jpeg'
import image_1 from 'public/images/two-people-looking-tablet.jpeg'
import image_3 from 'public/images/typing-in-notebook.jpeg'

const leadBenefits = () => {
  return (
    <GridSection id="section-1">
      <Container>
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
            <ImageWrap>
              <ImageComponent src={image_1} alt="" className="image_one" />
            </ImageWrap>
          </Cards>
          <Cards>
            <ImageWrap>
              <ImageComponent src={image_2} alt="" className="image_two" />
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
            <ImageWrap>
              <ImageComponent src={image_3} alt="" />
            </ImageWrap>
          </Cards>
        </GridWrap>
      </Container>
    </GridSection>
  )
}

export default leadBenefits
