import Image from 'next/image'
import Link from 'next/link'

import {Section} from '../hero/HeroElements'
import {LeadContainer, LeadContentText, LeadImageWrap} from './LeadWallElements'

import ImageGallery from '/public/images/Gallery_2.jpg'

const LeadWall = () => {
  return (
    <>
      <Section>
        <LeadContainer>
          <LeadImageWrap>
            <Image
              src={ImageGallery}
              alt="Women with painted face"
              placeholder="blur"
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
            <Link href="/advertising">
              <button>Learn More</button>
            </Link>
          </LeadContentText>
        </LeadContainer>
      </Section>
    </>
  )
}

export default LeadWall
