import React from 'react'
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

import Image from '../../assets/images/Results.jpg'
import {Link} from 'react-router-dom'
import {AiOutlineGlobal} from 'react-icons/ai'
import {RiComputerLine} from 'react-icons/ri'
import {IoPhonePortraitOutline} from 'react-icons/io5'

const Featured = () => {
  return (
    <FeaturedSection id="branding">
      <FeaturedContainer>
        {/* <h2>Choose Atalaso’s expertise</h2>
        <p>Three reasons to become a customer:</p> */}
        <FeaturedWrap>
          <FeaturedContentLeft>
            <ContentLeftWrap>
              <img src={Image} />
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
                <Link to="contact-us" style={{textDecoration: 'none'}}>
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
