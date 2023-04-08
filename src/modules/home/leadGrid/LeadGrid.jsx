import Image from 'next/image'
import Link from 'next/link'

import {
  Container,
  GridSection,
  TitleContainer,
  GridContainer,
  GridTop,
  ArrowIcon,
  GridBottomWrap,
  GridLeft,
  GridRight,
  PercentageIcon,
  Count,
} from './LeadGridElements'

import GirlGifBg from 'public/images/Girl_illustration.gif'
import GraphicGifBg from 'public/images/Graphic_illustration.gif'

const LeadGrid = () => {
  return (
    <GridSection>
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
            <Link href="/">
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
                <Image src={GirlGifBg} />
              </div>
            </Link>
          </GridTop>
          <GridBottomWrap>
            <GridLeft>
              <Link href="/">
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
              </Link>
            </GridLeft>
            <GridRight>
              <Link href="/">
                <div className="grid_2_container">
                  <h3 className="grid_3_content_h3">
                    Earn interest on your savings and watch your money grow
                  </h3>
                  <span className="grid_2_span">
                    Start Now
                    <ArrowIcon />
                  </span>
                </div>
                <div className="grid_3_count">
                  <Count start={0} end={70} duration={5} />
                  <PercentageIcon />
                </div>
              </Link>
            </GridRight>
          </GridBottomWrap>
        </GridContainer>
      </Container>
    </GridSection>
  )
}

export default LeadGrid
