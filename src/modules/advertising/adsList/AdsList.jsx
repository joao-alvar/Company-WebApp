import {useState} from 'react'

import {Section} from '@/modules/home/hero/HeroElements'

import {
  Container,
  Text,
  Wrapper,
  Content,
  ListWrap,
  StyledList,
  Icon,
  ContentMobile,
} from './AdsListElements'

const AdsList = () => {
  const [isOpen, setIsOpen] = useState(0)
  return (
    <Section>
      <Container>
        <Text>Designed to help you scale at every step</Text>
        <Wrapper>
          <Content>
            <div className={isOpen == 0 ? 'text show' : 'text'}>
              <h2>Electric vehicles will never be the same</h2>
              <p>
                Ultium. The innovation powering General Motors&apos; expanding
                lineup of EVs for every person and every purpose. Explore the
                benefits of choosing an EV powered by Ultium.
              </p>
            </div>
            <div className={isOpen == 1 ? 'text show' : 'text'}>
              <h2>Electric vehicles will never be the same</h2>
              <p>
                Ultium. The innovation powering General Motors&apos; expanding
                lineup of EVs for every person and every purpose. Explore the
                benefits of choosing an EV powered by Ultium.
              </p>
            </div>
            <div className={isOpen == 2 ? 'text show' : 'text'}>
              <h2>Electric vehicles will never be the same</h2>
              <p>
                Ultium. The innovation powering General Motors&apos; expanding
                lineup of EVs for every person and every purpose. Explore the
                benefits of choosing an EV powered by Ultium.
              </p>
            </div>
            <div className={isOpen == 3 ? 'text show' : 'text'}>
              <h2>Electric vehicles will never be the same</h2>
              <p>
                Ultium. The innovation powering General Motors&apos; expanding
                lineup of EVs for every person and every purpose. Explore the
                benefits of choosing an EV powered by Ultium.
              </p>
            </div>
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
                  <Icon className={isOpen == 0 ? 'arrow_up' : ''} />
                  {isOpen == 0 && (
                    <>
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
                  <Icon className={isOpen == 1 ? 'arrow_up' : ''} />
                  {isOpen == 1 && (
                    <>
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
                  <Icon className={isOpen == 2 ? 'arrow_up' : ''} />
                  {isOpen == 2 && (
                    <>
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
                  <Icon className={isOpen == 3 ? 'arrow_up' : ''} />
                  {isOpen == 3 && (
                    <>
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
            </StyledList>
          </ListWrap>
        </Wrapper>
      </Container>
    </Section>
  )
}

export default AdsList
