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
} from './LeadCardsElements'

import Saving from '/public/images/Saving.svg'

const LeadCards = () => {
  return (
    <>
      <Section>
        <Container>
          <TitleWrap>
            <h2>Learn how Atalaso drives change</h2>
          </TitleWrap>
          <Content>
            <TextWrap>
              <p>
                Our services help customers achieve their goals, meet or exceed
                ROI and scale processes. Whether it&apos;s through cutting-edge
                software, customized consulting services, or strategic
                partnerships, we are committed to delivering solutions that
                drive growth, streamline processes, and improves efficiency.
              </p>
            </TextWrap>
            <ListWrap>
              <Cards>
                <IconContainer>
                  <HandsIcon />
                </IconContainer>
                <p>
                  Improving, implementing, and elevating organizational
                  capabilities
                </p>
              </Cards>
              <Cards>
                <IconContainer>
                  <GraphUpIcon />
                </IconContainer>
                <p>
                  Revolutionize your business through innovation, technology,
                  and strategic practices
                </p>
              </Cards>
              <Cards>
                <IconContainer>
                  <IconSvg src={Saving} alt="Hand savings, a coin icon" />
                </IconContainer>
                <p>Improve ROI through Digital Transformation</p>
              </Cards>
            </ListWrap>
          </Content>
        </Container>
      </Section>
    </>
  )
}

export default LeadCards
