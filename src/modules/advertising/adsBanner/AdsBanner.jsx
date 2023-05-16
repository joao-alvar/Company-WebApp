import {RxViewGrid} from 'react-icons/rx'

import ImageComponent from '@/components/imageComponent/ImageComponent'

import {Section} from '@/modules/home/hero/HeroElements'

import {
  Container,
  Banner,
  ImageWrap,
  Content,
  TextWrap,
  IconWrap,
  GridListed,
  List,
  Icon,
  Text,
} from './AdsBannerElements'

import building from '/public/images/building.jpeg'

const AdsBanner = () => {
  return (
    <Section id="seo">
      <Container>
        <Banner>
          {/* <ImageWrap>
            <ImageComponent
              src={building}
              width={300}
              height={300}
              alt="Illustration"
            />
          </ImageWrap> */}
          <Content>
            <TextWrap>
              <h3>Event overview</h3>
              <h2>A single day, a year&apos;s worth of impact</h2>
              <p>
                Stripe Sessions brings together business leaders and builders to
                discuss the most important internet economy trends. This year,
                we&apos;re focused on the many ways businesses can continue to
                accelerate progress in times of change.
              </p>
            </TextWrap>
            <IconWrap>
              <GridListed>
                <List>
                  <Icon as={RxViewGrid} />
                  <Text>
                    <h4>Sleek, black-on-black panels.</h4>
                    <p>
                      While other solar providers may use blue or silver panels,
                      ION exclusively uses black-on-black panels for a sleek and
                      modern design.
                    </p>
                  </Text>
                </List>
                <List>
                  <Icon as={RxViewGrid} />
                  <Text>
                    <h4>Sleek, black-on-black panels.</h4>
                    <p>
                      While other solar providers may use blue or silver panels,
                      ION exclusively uses black-on-black panels for a sleek and
                      modern design.
                    </p>
                  </Text>
                </List>
                <List>
                  <Icon as={RxViewGrid} />
                  <Text>
                    <h4>Sleek, black-on-black panels.</h4>
                    <p>
                      While other solar providers may use blue or silver panels,
                      ION exclusively uses black-on-black panels for a sleek and
                      modern design.
                    </p>
                  </Text>
                </List>
                <List>
                  <Icon as={RxViewGrid} />
                  <Text>
                    <h4>Sleek, black-on-black panels.</h4>
                    <p>
                      While other solar providers may use blue or silver panels,
                      ION exclusively uses black-on-black panels for a sleek and
                      modern design.
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

export default AdsBanner
