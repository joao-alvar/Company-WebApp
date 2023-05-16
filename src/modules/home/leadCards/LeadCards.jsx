import React from 'react'

import {
  Section,
  Container,
  TitleWrap,
  Content,
  TextWrap,
  ListWrap,
  Cards,
  IconContainer,
  GraphUpIcon,
  HandsIcon,
  IconSvg,
} from './LeadCardslements'

import Group from '/public/images/Group.svg'
import Saving from '/public/images/Saving.svg'

const LeadCards = () => {
  return (
    <>
      <Section>
        <Container>
          <TitleWrap>
            <h2>Learn how Atalaso products help you</h2>
          </TitleWrap>
          <Content>
            <TextWrap>
              <p>
                Customer 360 is our suite of products and services that help 98%
                of customers meet or exceed their ROI goals. If you&apos;re
                looking for a strategic wellbeing partner, backed by science and
                devoted to your business, let us show you how Unmind works.
                Unmind Insights gives you a data-driven view of organisational
                wellbeing providing the insights, and actions, you need to drive
                lasting change.
              </p>
            </TextWrap>
            <ListWrap>
              <Cards>
                <IconContainer>
                  <HandsIcon />
                </IconContainer>
                <p>
                  Receive payments in local currency and settle funds faster
                </p>
              </Cards>
              <Cards>
                <IconContainer>
                  <GraphUpIcon />
                </IconContainer>
                <p>
                  Receive payments in local currency and settle funds faster
                </p>
              </Cards>
              <Cards>
                <IconContainer>
                  <IconSvg src={Saving} alt="Hand Savings icon" />
                </IconContainer>
                <p>
                  Receive payments in local currency and settle funds faster
                </p>
              </Cards>
            </ListWrap>
          </Content>
        </Container>
      </Section>
    </>
  )
}

export default LeadCards
