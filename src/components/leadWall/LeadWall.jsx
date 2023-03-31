import React from 'react'
import LazyImage from '../LazyLoadImage/LazyImage'
import {LeadContainer, LeadContentText, LeadImageWrap} from './LeadWallElements'
import {Section} from '../hero/HeroElements'
import {Link} from 'react-router-dom'
import Image from '../../assets/images/Gallery_2.jpg'

const LeadWall = () => {
  return (
    <>
      <Section>
        <LeadContainer>
          <LeadImageWrap>
            <LazyImage
              src={Image}
              placeholder="Women with painted face"
              width="100%"
              height="100%"
            />
          </LeadImageWrap>
          <LeadContentText>
            <h2>PUT YOUR NAME ON THE WALL</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. At odit
              culpa molestias pariatur esse itaque soluta quaerat eligendi
              delectus repudiandae! Blanditiis quam dolores iste illo numquam
              exercitationem aliquam molestias dolorum?
            </p>
            <p className="lead_content_p">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. At odit
              culpa molestias pariatur esse itaque soluta quaerat eligendi
              delectus repudiandae! Blanditiis quam dolores iste illo numquam
              exercitationem aliquam molestias dolorum?
            </p>
            <Link to="advertising">
              <button>Learn More</button>
            </Link>
          </LeadContentText>
        </LeadContainer>
      </Section>
    </>
  )
}

export default LeadWall
