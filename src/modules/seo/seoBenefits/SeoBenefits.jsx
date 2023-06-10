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
            <h2>
              Why <span>SEO is important?</span>
            </h2>
          </TitleWrap>
          <Content>
            <FloatLeft>
              <p>
                SEO (Search Engine Optimization) offers numerous benefits that
                make it a crucial investment for businesses of all sizes: In
                today&apos;s digital age, where consumers heavily rely on search
                engines to find products and services, SEO is an essential
                component of any successful online marketing strategy. By
                leveraging the power of SEO, businesses can enjoy increased
                visibility, targeted traffic, cost-effectiveness, trust, and
                long-term growth, ultimately leading to higher conversions and
                improved business success.
              </p>
            </FloatLeft>
            <FloatRight>
              <h3>
                {/* What makes edge so exciting is the potential it has for
                transforming business across every industry and function. */}
                The crucial aspect of SEO lies in its transformative potential
                for businesses across all industries and functions.
              </h3>
            </FloatRight>
          </Content>
        </Wrapper>
      </Container>
    </Section>
  )
}

export default SeoBenefits
