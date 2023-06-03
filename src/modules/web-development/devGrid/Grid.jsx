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
            <h3>Smart business and automation</h3>
            <p>
              Make day-to-day spending a breeze with all things money in one
              place responsive, user-friendly, and visually stunning. We
              utilize.
            </p>
          </Grid>
          <Grid>
            <Icon as={MdOutlineDevices} />
            <h3>Smart business and automation</h3>
            <p>
              Make day-to-day spending a breeze with all things money in one
              place responsive, user-friendly, and visually stunning. We
              utilize.
            </p>
          </Grid>
          <Grid>
            <Icon as={AiOutlineUsergroupAdd} />
            <h3>Smart business and automation</h3>
            <p>
              Make day-to-day spending a breeze with all things money in one
              place responsive, user-friendly, and visually stunning. We
              utilize.
            </p>
          </Grid>
          <Grid>
            <Icon as={TfiWrite} />
            <h3>Smart business and automation</h3>
            <p>
              Make day-to-day spending a breeze with all things money in one
              place responsive, user-friendly, and visually stunning. We
              utilize.
            </p>
          </Grid>
          <Grid>
            <Icon as={TfiStatsUp} />
            <h3>Smart business and automation</h3>
            <p>
              Make day-to-day spending a breeze with all things money in one
              place responsive, user-friendly, and visually stunning. We
              utilize.
            </p>
          </Grid>
          <Grid>
            <Icon as={IoTimeOutline} />
            <h3>Smart business and automation</h3>
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
