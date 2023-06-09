import {useState} from 'react'

import ImageComponent from '@/components/imageComponent/ImageComponent'

import {Section} from '@/modules/home/hero/HeroElements'

import {
  Container,
  BtnWrap,
  Content,
  Title,
  ActiveContent,
  Wrapper,
  TextContent,
  ImageWrap,
  Button,
} from './DevLeadElements'

import ImageActive_1 from '/public/images/devices-image.jpeg'
import ImageActive_3 from '/public/images/landing-templates.jpeg'
import ImageActive_2 from '/public/images/optimization-image.jpeg'

const DevLead = () => {
  const [active, setActive] = useState(0)
  return (
    <Section>
      <Container>
        <Content>
          <Title>Be at the forefront of innovation</Title>
          <p>
            In today&apos;s rapidly evolving digital landscape, the importance
            of technology adoption for businesses cannot be overstated.
            Embracing and leveraging technology has become a critical factor in
            driving growth, maintaining competitiveness, and achieving long-term
            success.
          </p>
          <p>
            One of the key reasons why technology adoption is crucial is its
            ability to streamline business operations and enhance efficiency.
            Automated processes, advanced software solutions, and digital tools
            enable businesses to automate repetitive tasks, improve
            productivity, and reduce human error. This not only saves time and
            resources but also allows employees to focus on higher-value
            activities that contribute to business growth.
          </p>
          <BtnWrap>
            <Button
              onClick={() => setActive(0)}
              className={active == 0 ? 'active' : null}
              data-clog-click
            >
              Digital integration
            </Button>
            <Button
              onClick={() => setActive(1)}
              className={active == 1 ? 'active' : null}
              data-clog-click
            >
              Prepare for a digital transformation
            </Button>
            <Button
              onClick={() => setActive(2)}
              className={active == 2 ? 'active' : null}
              data-clog-click
            >
              Continuous development
            </Button>
          </BtnWrap>
        </Content>
        <ActiveContent>
          <Wrapper className={active == 0 && 'is_display'}>
            <ImageWrap>
              <ImageComponent
                src={ImageActive_1}
                height={300}
                alt="Devices in a desk, computer, laptop, tablet, cellphone and a lamp next"
              />
            </ImageWrap>
            <TextContent>
              <h3>Providing extraordinary experiences</h3>
              <p>
                A professional web-site enhances your brand&apos;s image and
                credibility, helps build trust and establishing your authority
                in the industry. you can further instill confidence in your
                visitors and increase the likelihood of conversions.
              </p>
              <p>
                We ensure a well-designed user experience providing clear
                navigation, intuitive design, and fast-loading times. Visitors
                should be able to easily find the information they need,
                navigate through the page effortlessly, and have a positive
                interaction with your brand. A positive user experience
                increases engagement, reduces bounce rates, and encourages
                visitors to stay longer on your website.
              </p>
            </TextContent>
          </Wrapper>
          <Wrapper className={active == 1 && 'is_display'}>
            <TextContent>
              <h3>Scalability and performance</h3>
              <p>
                Developing software that can handle increased user loads and
                perform efficiently is essential for long-term success.
                Designing for scalability and optimizing performance through
                efficient coding, caching, and database design ensures that the
                software can handle growing demands.
              </p>
            </TextContent>
            <ImageWrap>
              <ImageComponent
                src={ImageActive_2}
                height={300}
                alt="An office with a desk with some objects on, chair, computer and a clock on the wall"
              />
            </ImageWrap>
          </Wrapper>
          <Wrapper className={active == 2 && 'is_display'}>
            <ImageWrap>
              <ImageComponent
                src={ImageActive_3}
                height={300}
                alt="Four land-pages design templates with creative illustrations"
              />
            </ImageWrap>
            <TextContent>
              <h3>Continuous improvement and adaptation</h3>
              <p>
                Software development is an iterative process, and embracing a
                culture of continuous improvement is essential. Regularly
                evaluating the software, gathering user feedback, and
                incorporating lessons learned help refine the product and ensure
                it remains relevant and competitive.
              </p>
            </TextContent>
          </Wrapper>
        </ActiveContent>
      </Container>
    </Section>
  )
}

export default DevLead
