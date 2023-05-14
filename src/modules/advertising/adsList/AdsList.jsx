import {useState} from 'react'
import {RiArrowUpSLine} from 'react-icons/ri'

import ImageComponent from '@/components/imageComponent/ImageComponent'

import {Section} from '@/modules/home/hero/HeroElements'

import {
  Container,
  Wrapper,
  Content,
  ListWrap,
  StyledList,
  Icon,
  ImageWrap,
  ContentMobile,
} from './AdsListElements'

import featuredImage from '/public/images/Results.jpg'

const AdsList = () => {
  const [isOpen, setIsOpen] = useState(0)
  return (
    <Section>
      <Container>
        <Wrapper>
          <Content>
            {isOpen == 0 && (
              <>
                <span>Electric vehicles</span>
                <h2>Electric vehicles will never be the same</h2>
                <p>
                  Ultium. The innovation powering General Motors&apos; expanding
                  lineup of EVs for every person and every purpose. Explore the
                  benefits of choosing an EV powered by Ultium.
                </p>
              </>
            )}
            {isOpen == 1 && (
              <>
                <h2>Electric vehicles will never be the same</h2>
                <p>
                  Ultium. The innovation powering General Motors&apos; expanding
                  lineup of EVs for every person and every purpose. Explore the
                  benefits of choosing an EV powered by Ultium.
                </p>
              </>
            )}
            {isOpen == 2 && (
              <>
                <h2>Electric vehicles will never be the same</h2>
                <p>
                  Ultium. The innovation powering General Motors&apos; expanding
                  lineup of EVs for every person and every purpose. Explore the
                  benefits of choosing an EV powered by Ultium.
                </p>
              </>
            )}
            {isOpen == 3 && (
              <>
                <span>Electric vehicles</span>
                <h2>Electric vehicles will never be the same</h2>
                <ImageWrap>
                  <ImageComponent src={featuredImage} alt="something" />
                </ImageWrap>
              </>
            )}
          </Content>
          <ListWrap>
            <StyledList>
              <li
                onClick={() => setIsOpen(0)}
                data-clog-click
                isOpen={isOpen}
                className={isOpen == 0 ? 'active' : null}
              >
                <div className="list_content">
                  <button>Jump-start your day</button>
                  <Icon as={isOpen == 0 && RiArrowUpSLine} />
                  {isOpen == 0 && (
                    <>
                      <p className="content_p">
                        expanding lineup of EVs for every person and every
                        purpose. Explore the benefits of choosing an EV powered
                        by Ultium.
                      </p>
                      <ContentMobile>
                        <p>
                          Ultium. The innovation powering General Motors&apos;
                          expanding lineup of EVs for every person and every
                          purpose. Explore the benefits of choosing an EV
                          powered by Ultium.
                        </p>
                      </ContentMobile>
                    </>
                  )}
                </div>
              </li>
              <li
                onClick={() => setIsOpen(1)}
                data-clog-click
                className={isOpen == 1 ? 'active' : null}
              >
                <div className="list_content">
                  <button>Find notes fast</button>
                  <Icon as={isOpen == 1 && RiArrowUpSLine} />
                  {isOpen == 1 && (
                    <>
                      <p className="content_p">
                        expanding lineup of EVs for every person and every
                        purpose. Explore the benefits of choosing an EV powered
                        by Ultium.
                      </p>
                      <ContentMobile>
                        <p>
                          Ultium. The innovation powering General Motors&apos;
                          expanding lineup of EVs for every person and every
                          purpose. Explore the benefits of choosing an EV
                          powered by Ultium.
                        </p>
                      </ContentMobile>
                    </>
                  )}
                </div>
              </li>
              <li
                onClick={() => setIsOpen(2)}
                data-clog-click
                className={isOpen == 2 ? 'active' : null}
              >
                <div className="list_content">
                  <button>Get organized</button>
                  <Icon as={isOpen == 2 && RiArrowUpSLine} />
                  {isOpen == 2 && (
                    <>
                      <p className="content_p">
                        expanding lineup of EVs for every person and every
                        purpose. Explore the benefits of choosing an EV powered
                        by Ultium.
                      </p>
                      <ContentMobile>
                        <p>
                          Ultium. The innovation powering General Motors&apos;
                          expanding lineup of EVs for every person and every
                          purpose. Explore the benefits of choosing an EV
                          powered by Ultium.
                        </p>
                      </ContentMobile>
                    </>
                  )}
                </div>
              </li>
              <li
                onClick={() => setIsOpen(3)}
                data-clog-click
                className={isOpen == 3 ? 'active' : null}
              >
                <div className="list_content">
                  <button>No signal? no problem.</button>
                  <Icon as={isOpen == 3 && RiArrowUpSLine} />
                  {isOpen == 3 && (
                    <>
                      <p className="content_p">
                        expanding lineup of EVs for every person and every
                        purpose. Explore the benefits of choosing an EV powered
                        by Ultium.
                      </p>
                      <ContentMobile>
                        <p>
                          Ultium. The innovation powering General Motors&apos;
                          expanding lineup of EVs for every person and every
                          purpose. Explore the benefits of choosing an EV
                          powered by Ultium.
                        </p>
                        <ImageWrap>
                          <ImageComponent src={featuredImage} alt="something" />
                        </ImageWrap>
                      </ContentMobile>
                    </>
                  )}
                </div>
              </li>
            </StyledList>
          </ListWrap>
        </Wrapper>
      </Container>
    </Section>
  )
}

export default AdsList
