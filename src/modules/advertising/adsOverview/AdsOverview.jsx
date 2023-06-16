import ImageComponent from '@/components/imageComponent/ImageComponent'

import {Section} from '@/modules/home/hero/HeroElements'

import {
  Container,
  Banner,
  Content,
  TextWrap,
  IconWrap,
  GridListed,
  List,
  ImageWrap,
  Text,
} from './AdsOverviewElements'

import clickIcon from 'public/images/icons/click-icon.png'
import mailIcon from 'public/images/icons/mail-icon.png'
import phoneIcon from 'public/images/icons/two-cellphones-icon.png'
import webIcon from 'public/images/icons/web-page-icon.png'

const AdsOverview = () => {
  return (
    <Section id="overview">
      <Container>
        <Banner>
          <Content>
            <TextWrap>
              <h3>Advertising overview</h3>
              <h2>A single step, years worth of impact</h2>
              <p>
                The best digital marketing strategies and approaches may vary
                based on your specific industry, target audience, and business
                goals. It&apos;s important to develop a tailored strategy that
                aligns with your unique needs, and consistently adapt and refine
                your approach based on data and market trends.
              </p>
            </TextWrap>
            <IconWrap>
              <GridListed>
                <List>
                  <ImageWrap>
                    <ImageComponent src={webIcon} alt="Web page icon" />
                  </ImageWrap>
                  <Text>
                    <h4>Conversion rate optimization (CRO)</h4>
                    <p>
                      Optimizing your website and landing pages to improve the
                      conversion rate of visitors into customers. This involves
                      analyzing user behavior, conducting A/B testing, and
                      making data-driven improvements to enhance the user
                      experience and drive more conversions.
                    </p>
                  </Text>
                </List>
                <List>
                  <ImageWrap>
                    <ImageComponent
                      src={phoneIcon}
                      alt="Two cellphones icons"
                    />
                  </ImageWrap>
                  <Text>
                    <h4>Mobile marketing</h4>
                    <p>
                      Optimizing your marketing efforts for mobile devices, as
                      mobile usage continues to rise. This includes
                      mobile-responsive web design, mobile apps, and mobile
                      advertising to reach and engage mobile users effectively.
                    </p>
                  </Text>
                </List>
                <List>
                  <ImageWrap>
                    <ImageComponent src={clickIcon} alt="Hand click icon" />
                  </ImageWrap>
                  <Text>
                    <h4>Pay-per-click (PPC) advertising</h4>
                    <p>
                      Running targeted ads on search engines and social media
                      platforms, paying only when users click on your ads. This
                      allows for precise audience targeting and immediate
                      visibility.
                    </p>
                  </Text>
                </List>
                <List>
                  <ImageWrap>
                    <ImageComponent src={mailIcon} alt="Email icon" />
                  </ImageWrap>
                  <Text>
                    <h4>Email marketing</h4>
                    <p>
                      Building an email list and sending targeted emails to
                      nurture leads, promote products or services, and maintain
                      customer relationships. Email marketing is effective for
                      driving conversions, building customer loyalty, and
                      generating repeat business.
                    </p>
                  </Text>
                </List>
              </GridListed>
            </IconWrap>
          </Content>
        </Banner>
      </Container>
    </Section>
  )
}

export default AdsOverview
