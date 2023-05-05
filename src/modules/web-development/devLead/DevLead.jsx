import Image from 'next/image'
import {useState} from 'react'

import {Section} from '@/modules/home/hero/HeroElements'

import {
  Container,
  BtnWrap,
  Content,
  ActiveContent,
  Button,
  ButtonActive,
} from './DevLeadElements'

import ImageActive1 from '/public/images/Results.jpg'

const DevLead = () => {
  const [active, setActive] = useState(0)
  return (
    <Section>
      <Container>
        <Content>
          <h2 style={{marginBottom: '0.5em'}}>Top Lead Gen Case Studies</h2>
          <p>
            Lead generation has changed a lot over the years. Getting people
            interested in your business isn&apos;t as simple as it once was. Our
            marketing experts create modern, leading-edge marketing strategies
            producing the results your business needs now and in the long term.
          </p>
          <BtnWrap>
            <Button
              onClick={() => setActive(0)}
              className={active == 0 ? 'active' : null}
              data-clog-click
            >
              Transform to digital
            </Button>
            <Button
              onClick={() => setActive(1)}
              className={active == 1 ? 'active' : null}
              data-clog-click
            >
              Prepare for a workforce transformation
            </Button>
            <Button
              onClick={() => setActive(2)}
              className={active == 2 ? 'active' : null}
              data-clog-click
            >
              Optimize the deal
            </Button>
          </BtnWrap>
        </Content>
        <ActiveContent>
          {active == 0 && (
            <>
              <div className="img_wrap">
                <Image src={ImageActive1} height={300} alt="Computer" />
              </div>
              <div className="content_wrap">
                <h2>Top Lead Gen Case Studies</h2>
                <p>
                  Lead generation has changed a lot over the years. Getting
                  people interested in your business isn&apos;t as simple as it
                  once was. Our marketing experts create modern, leading-edge
                  marketing strategies producing the results your business needs
                  now and in the long term.
                </p>
                <ButtonActive href="/contact" data-clog-click>
                  Learn more
                </ButtonActive>
              </div>
            </>
          )}
          {active == 1 && (
            <>
              <div className="content_wrap">
                <h2>Top Lead Gen Case Studies</h2>
                <p>
                  Lead generation has changed a lot over the years. Getting
                  people interested in your business isn&apos;t as simple as it
                  once was. Our marketing experts create modern, leading-edge
                  marketing strategies producing the results your business needs
                  now and in the long term.
                </p>
                <ButtonActive href="/contact" data-clog-click>
                  Learn more
                </ButtonActive>
              </div>
              <div className="img_wrap">
                <Image src={ImageActive1} height={300} alt="Computer" />
              </div>
            </>
          )}
          {active == 2 && (
            <>
              <div className="img_wrap">
                <Image src={ImageActive1} height={300} alt="Computer" />
              </div>
              <div className="content_wrap">
                <h2>Top Lead Gen Case Studies</h2>
                <p>
                  Lead generation has changed a lot over the years. Getting
                  people interested in your business isn&apos;t as simple as it
                  once was. Our marketing experts create modern, leading-edge
                  marketing strategies producing the results your business needs
                  now and in the long term.
                </p>
                <ButtonActive href="/contact" data-clog-click>
                  Learn more
                </ButtonActive>
              </div>
            </>
          )}
        </ActiveContent>
      </Container>
    </Section>
  )
}

export default DevLead
