import React from 'react'

import ImageComponent from '@/components/imageComponent/ImageComponent'

import {Section} from '@/modules/home/hero/HeroElements'

import {
  Container,
  Wrapper,
  ImageContainer,
  Content,
} from './DevFeaturesElements'

import Image_1 from 'public/images/business-teamwork.png'
import Image_2 from 'public/images/network-illustration.png'
import Image_3 from 'public/images/user-interaction-illustration.png'

const DevFeatures = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <ImageContainer>
            <ImageComponent
              src={Image_1}
              alt="Business teamwork in office vector illustration. Cartoon corporate office workers people meeting and chatting, co-working space with working business team and chat messages isolated on white "
              // width={450}
              // height={450}
            />
          </ImageContainer>
          <Content>
            <h2>Effective communication and collaboration</h2>
            <p>
              Communication is key in software development, both within the
              development team and with stakeholders. Regular communication,
              collaboration, and feedback loops help ensure everyone is aligned,
              expectations are managed, and potential issues or changes are
              addressed in a timely manner.
            </p>
          </Content>
        </Wrapper>
        <Wrapper className="content_reverse">
          <Content>
            <h2>Clear and well-defined requirements</h2>
            <p>
              A thorough understanding of the project requirements is crucial
              for successful software development. Clearly defining the
              functionality, features, and goals of the software helps guide the
              development process and ensures that the end product meets the
              desired objectives.
            </p>
          </Content>
          <ImageContainer>
            <ImageComponent
              src={Image_2}
              alt="Isometric illustration with network connections and devices, a camera, fax machine, computer, laptop, and monitors"
            />
          </ImageContainer>
        </Wrapper>
        <Wrapper>
          <ImageContainer>
            <ImageComponent
              src={Image_3}
              alt="Vector illustration featuring a girl checking a floating list while sitting in front of a laptop"
            />
          </ImageContainer>
          <Content>
            <h2>User-centric design</h2>
            <p>
              Putting the end-users at the center of the development process is
              crucial. User experience (UX) design principles, usability
              testing, and incorporating user feedback help create software that
              is intuitive, user-friendly, and meets the needs of its intended
              audience.
            </p>
          </Content>
        </Wrapper>
      </Container>
    </Section>
  )
}

export default DevFeatures
