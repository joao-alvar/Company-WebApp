import {Section} from '@/modules/home/hero/HeroElements'

import {
  Container,
  Wrapper,
  Content,
  TitleWrap,
  FloatLeft,
  FloatRight,
} from './SeoBenefitsElements'

const SeoBenefits = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <TitleWrap>
            <h2>What is edge computing?</h2>
          </TitleWrap>
          <Content>
            <FloatLeft>
              <p>
                Much of today’s computing already happens at the edge in places
                like hospitals, factories and retail locations, processing the
                most sensitive data and powering critical systems that must
                function reliably and safely. These places require solutions
                with low latency that do not need a network connection. What
                makes edge so exciting is the potential it has for transforming
                business across every industry and function, from customer
                engagement and marketing to production and back-office
                operations. In all cases, edge helps make business functions
                proactive and adaptive—often in real-time—leading to new,
                optimized experiences for people.
              </p>
            </FloatLeft>
            <FloatRight>
              <h3>
                What makes edge so exciting is the potential it has for
                transforming business across every industry and function.
              </h3>
            </FloatRight>
          </Content>
        </Wrapper>
      </Container>
    </Section>
  )
}

export default SeoBenefits
