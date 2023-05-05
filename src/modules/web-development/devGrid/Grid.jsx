import React from 'react'
import {AiOutlineCode, AiOutlineUsergroupAdd} from 'react-icons/ai'
import {IoTimeOutline} from 'react-icons/io5'
import {MdOutlineDevices} from 'react-icons/md'
import {TfiWrite, TfiStatsUp} from 'react-icons/tfi'

import {Section} from '@/modules/home/hero/HeroElements'
import {TitleContainer} from '@/modules/home/leadGrid/LeadGridElements'

import {Container, Wrapper, Grid, Icon} from './GridElements'

const GridSection = () => {
  return (
    <Section>
      <Container>
        <TitleContainer>
          <p>Everyday essentials</p>
          <h2>Send, spend and save smarter</h2>
          <h3>
            Make day-to-day spending a breeze with all things money in one place
          </h3>
        </TitleContainer>
        <Wrapper>
          <Grid>
            <Icon as={AiOutlineCode} />
            <h2>Smart business and automation</h2>
            <p>
              Make day-to-day spending a breeze with all things money in one
              place responsive, user-friendly, and visually stunning. We
              utilize.
            </p>
          </Grid>
          <Grid>
            <Icon as={MdOutlineDevices} />
            <h2>Smart business and automation</h2>
            <p>
              Make day-to-day spending a breeze with all things money in one
              place responsive, user-friendly, and visually stunning. We
              utilize.
            </p>
          </Grid>
          <Grid>
            <Icon as={AiOutlineUsergroupAdd} />
            <h2>Smart business and automation</h2>
            <p>
              Make day-to-day spending a breeze with all things money in one
              place responsive, user-friendly, and visually stunning. We
              utilize.
            </p>
          </Grid>
          <Grid>
            <Icon as={TfiWrite} />
            <h2>Smart business and automation</h2>
            <p>
              Make day-to-day spending a breeze with all things money in one
              place responsive, user-friendly, and visually stunning. We
              utilize.
            </p>
          </Grid>
          <Grid>
            <Icon as={TfiStatsUp} />
            <h2>Smart business and automation</h2>
            <p>
              Make day-to-day spending a breeze with all things money in one
              place responsive, user-friendly, and visually stunning. We
              utilize.
            </p>
          </Grid>
          <Grid>
            <Icon as={IoTimeOutline} />
            <h2>Smart business and automation</h2>
            <p>
              {' '}
              Make day-to-day spending a breeze with all things money in one
              place responsive, user-friendly, and visually stunning. We
              utilize.
            </p>
          </Grid>
        </Wrapper>
      </Container>
    </Section>
  )
}

export default GridSection
