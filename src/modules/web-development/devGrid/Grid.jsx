import React from 'react'
import {AiOutlineCode, AiOutlineUsergroupAdd} from 'react-icons/ai'
import {IoTimeOutline} from 'react-icons/io5'
import {MdOutlineDevices} from 'react-icons/md'
import {TfiWrite, TfiStatsUp} from 'react-icons/tfi'

import {Section} from '@/modules/home/hero/HeroElements'

import {Container, TitleContainer, Wrapper, Grid, Icon} from './GridElements'

const GridSection = () => {
  return (
    <Section>
      <Container>
        <TitleContainer>
          <h2>Driving changes</h2>
        </TitleContainer>
        <Wrapper>
          <Grid>
            <Icon as={AiOutlineCode} />
            <h3>API Integration</h3>
            <p>
              Integrating third-party APIs allows websites to leverage external
              services and functionalities, such as payment gateways, social
              media sharing, mapping services, and more.
            </p>
          </Grid>
          <Grid>
            <Icon as={MdOutlineDevices} />
            <h3>Responsive Web Design</h3>
            <p>
              Creating websites that are responsive and mobile-friendly is
              essential in today&apos;s digital landscape. Responsive web design
              ensures that websites adapt and display optimally across different
              devices.
            </p>
          </Grid>
          <Grid>
            <Icon as={AiOutlineUsergroupAdd} />
            <h3>Website Security Solutions</h3>
            <p>
              Web security is crucial for protecting user data and maintaining
              the integrity of websites. Implementing SSL certificates, firewall
              protection, and regular security audits helps safeguard against
              cyber threats and builds trust with users.
            </p>
          </Grid>
          <Grid>
            <Icon as={TfiWrite} />
            <h3>Analytics and Tracking</h3>
            <p>
              Implementing web analytics tools such as Google Analytics provides
              valuable insights into website performance, user behavior, and
              conversion tracking.
            </p>
          </Grid>
          <Grid>
            <Icon as={TfiStatsUp} />
            <h3>E-commerce Solutions</h3>
            <p>
              For businesses looking to sell products or services online,
              e-commerce we provide solutions for inventory management, payment
              integration, and customer tracking.
            </p>
          </Grid>
          <Grid>
            <Icon as={IoTimeOutline} />
            <h3>Stay Ahead</h3>
            <p>
              Nurturing innovation and leverage cutting-edge technologies to
              deliver groundbreaking solutions, to help business scale and
              conquer new markets .
            </p>
          </Grid>
        </Wrapper>
      </Container>
    </Section>
  )
}

export default GridSection
