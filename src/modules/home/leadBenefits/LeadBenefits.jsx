import React from 'react'

import {
  Section,
  Container,
  TitleWrap,
  Content,
  TextWrap,
  ListWrap,
  IconContainer,
  GraphUpIcon,
  HandsIcon,
  IconSvg,
} from './LeadBenefitsElements'

import Group from '/public/images/Group.svg'
import Saving from '/public/images/Saving.svg'

const LeadBenefits = () => {
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
              <li>
                <IconContainer>
                  <HandsIcon />
                </IconContainer>
                <p>trustability and expertise is Atalaso&apos;s standard</p>
              </li>
              <li>
                <IconContainer>
                  <GraphUpIcon />
                </IconContainer>
                <p>trustability and expertise is Atalaso&apos;s standard</p>
              </li>
              <li>
                <IconContainer>
                  <IconSvg src={Saving} alt="Hand Savings icon" />
                </IconContainer>
                <p>trustability and expertise is Atalaso&apos;s standard</p>
              </li>
            </ListWrap>
          </Content>
        </Container>
      </Section>
    </>
  )
}

export default LeadBenefits
