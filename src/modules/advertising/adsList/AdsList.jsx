import Image from 'next/image'
import {useState} from 'react'
import {RiArrowUpSLine} from 'react-icons/ri'

import {Section} from '@/modules/home/hero/HeroElements'

import {
  Container,
  Wrapper,
  Content,
  ListWrap,
  StyledList,
  Icon,
  ImageWrap,
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
                <ImageWrap>
                  <Image src={featuredImage} alt="something" />
                </ImageWrap>
              </>
            )}
            {isOpen == 1 && (
              <>
                <ImageWrap>
                  <Image src={featuredImage} alt="something" />
                </ImageWrap>
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
                <span>Electric vehicles</span>
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
                <p>
                  Ultium. The innovation powering General Motors&apos; expanding
                  lineup of EVs for every person and every purpose. Explore the
                  benefits of choosing an EV powered by Ultium.
                </p>
                <ImageWrap>
                  <Image src={featuredImage} alt="something" />
                </ImageWrap>
              </>
            )}
          </Content>
          <ListWrap>
            <StyledList>
              <li isOpen={isOpen} className={isOpen == 0 ? 'active' : null}>
                <div className="list_content">
                  <Icon as={isOpen == 0 && RiArrowUpSLine} />
                  <h3 onClick={() => setIsOpen(0)}>
                    Ultium. The innovation powering General Motors&apos;
                  </h3>
                  {isOpen == 0 && (
                    <p>
                      expanding lineup of EVs for every person and every
                      purpose. Explore the benefits of choosing an EV powered by
                      Ultium.
                    </p>
                  )}
                </div>
              </li>
              <li className={isOpen == 1 ? 'active' : null}>
                <Icon as={isOpen == 1 && RiArrowUpSLine} />
                <div className="list_content">
                  <h3 onClick={() => setIsOpen(1)}>
                    Ultium. The innovation powering General Motors&apos;
                  </h3>
                  {isOpen == 1 && (
                    <p>
                      expanding lineup of EVs for every person and every
                      purpose. Explore the benefits of choosing an EV powered by
                      Ultium.
                    </p>
                  )}
                </div>
              </li>
              <li className={isOpen == 2 ? 'active' : null}>
                <Icon as={isOpen == 2 && RiArrowUpSLine} />
                <div className="list_content">
                  <h3 onClick={() => setIsOpen(2)}>
                    Ultium. The innovation powering General Motors&apos;
                  </h3>
                  {isOpen == 2 && (
                    <p>
                      expanding lineup of EVs for every person and every
                      purpose. Explore the benefits of choosing an EV powered by
                      Ultium.
                    </p>
                  )}
                </div>
              </li>
              <li className={isOpen == 3 ? 'active' : null}>
                <Icon as={isOpen == 3 && RiArrowUpSLine} />
                <div className="list_content">
                  <h3 onClick={() => setIsOpen(3)}>
                    Ultium. The innovation powering General Motors&apos;
                  </h3>
                  {isOpen == 3 && (
                    <p>
                      expanding lineup of EVs for every person and every
                      purpose. Explore the benefits of choosing an EV powered by
                      Ultium.
                    </p>
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
