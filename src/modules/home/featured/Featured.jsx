import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineGlobal} from 'react-icons/ai'
import {IoPhonePortraitOutline} from 'react-icons/io5'
import {RiComputerLine} from 'react-icons/ri'

import {
  ButtonWrap,
  ContentLeftWrap,
  ContentRight,
  ContentRightWrap,
  FeaturedButton,
  FeaturedContainer,
  FeaturedContentLeft,
  FeaturedContentRight,
  FeaturedSection,
  FeaturedWrap,
  Icon,
} from './FeaturedElements'

import featuredImage from '/public/images/Results.jpg'

const Featured = () => {
  return (
    <FeaturedSection>
      <FeaturedContainer>
        <FeaturedWrap>
          <FeaturedContentLeft>
            <ContentLeftWrap>
              <Image
                src={featuredImage}
                alt="Board meeting"
                placeholder="blur"
              />
            </ContentLeftWrap>
          </FeaturedContentLeft>
          <FeaturedContentRight>
            <ContentRightWrap>
              <h2>Relax we take care of you</h2>
              <ContentRight>
                <Icon as={IoPhonePortraitOutline} />
                <div>
                  <h3>A super easy and functional mobile application</h3>
                  <p>
                    The application S-net Mobile won the German Design Awards in
                    2023
                  </p>
                </div>
              </ContentRight>
              <ContentRight>
                <Icon as={RiComputerLine} />
                <div>
                  <h3>A super easy and functional mobile application</h3>
                  <p>
                    The application S-net Mobile won the German Design Awards in
                    2023
                  </p>
                </div>
              </ContentRight>
              <ContentRight>
                <Icon as={AiOutlineGlobal} />
                <div>
                  <h3>A super easy and functional mobile application</h3>
                  <p>
                    The application S-net Mobile won the German Design Awards in
                    2023
                  </p>
                </div>
              </ContentRight>
              <ButtonWrap>
                <Link href="contact-us" style={{textDecoration: 'none'}}>
                  <FeaturedButton>Start Now</FeaturedButton>
                </Link>
              </ButtonWrap>
            </ContentRightWrap>
          </FeaturedContentRight>
        </FeaturedWrap>
      </FeaturedContainer>
    </FeaturedSection>
  )
}

export default Featured
