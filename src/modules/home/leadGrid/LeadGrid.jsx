import Image from 'next/image'

import {
  Container,
  GridSection,
  TitleContainer,
  GridContainer,
  GridTop,
  ArrowIcon,
  GridBottomWrap,
  GridLeft,
  LinkGrid,
  GridRight,
  PercentageIcon,
  Number,
} from './LeadGridElements'

import GirlGifBg from 'public/images/Girl_illustration.gif'
import GraphicGifBg from 'public/images/Graphic_illustration.gif'

const LeadGrid = () => {
  return (
    <GridSection id="section-1">
      <Container>
        <TitleContainer>
          <p>Everyday essentials</p>
          <h2>Send, spend and save smarter</h2>
          <h3>
            Make day-to-day spending a breeze with all things money in one place
          </h3>
        </TitleContainer>
        <GridContainer>
          <GridTop>
            <LinkGrid href="/" className="grid_container">
              <div className="grid_1_container">
                <h3 className="grid_1_content_h3">
                  Pay and get paid, hassle-free
                </h3>
                <p className="grid_1_content_p">
                  Send and request money with a tap, split bills easily with
                  anyone in 200+ countries
                </p>
                <span className="grid_1_span">
                  Explore all of our solutions
                  <ArrowIcon />
                </span>
              </div>
              <div className="grid_1_gif">
                <Image
                  src={GirlGifBg}
                  alt="Illustration of a girl and web components"
                />
              </div>
            </LinkGrid>
          </GridTop>
          <GridBottomWrap>
            <GridLeft>
              <LinkGrid href="/">
                <div className="grid_2_container">
                  <h3 className="grid_2_content_h3">
                    Earn interest on your savings and watch your money grow
                  </h3>
                  <span className="grid_2_span">
                    Start Now
                    <ArrowIcon />
                  </span>
                </div>
                <div className="grid_2_gif">
                  <Image
                    src={GraphicGifBg}
                    alt="Graphic illustration"
                    height="500"
                    width="500"
                  />
                </div>
              </LinkGrid>
            </GridLeft>
            <GridRight>
              <LinkGrid href="/">
                <div className="grid_2_container">
                  <h3 className="grid_3_content_h3">
                    Earn interest on your savings and watch your money grow
                  </h3>
                  <span className="grid_2_span">
                    Start Now
                    <ArrowIcon />
                  </span>
                </div>
                <div className="grid_3_number">
                  <Number>70</Number>
                  <PercentageIcon />
                </div>
              </LinkGrid>
            </GridRight>
          </GridBottomWrap>
        </GridContainer>
      </Container>
    </GridSection>
  )
}

export default LeadGrid
