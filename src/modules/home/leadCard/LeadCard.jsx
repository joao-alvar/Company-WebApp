import Image from 'next/image'

import {
  LeadCardSection,
  LeadCardContainer,
  LeadCardList,
  LeadCardContent,
  ArrowIcon,
} from './LeadCardElements'

import Card_1 from '/public/images/Card_1.jpg'
import Card_2 from '/public/images/Card_2.png'
import Card_3 from '/public/images/Card_3.jpg'

const LeadCard = () => {
  return (
    <LeadCardSection name="solutions" id="solutions">
      <LeadCardContainer>
        <h2>Scale your business with amazing design and great architecture</h2>
        <LeadCardList>
          <li>
            <Image src={Card_1} alt="Meeting" placeholder="blur" />
            <LeadCardContent>
              <h2>Amazing design</h2>
              <p> business with amazing design and great architecture</p>
              <button>
                Learn More <ArrowIcon />{' '}
              </button>
            </LeadCardContent>
          </li>
          <li>
            <Image src={Card_2} alt="Meeting" placeholder="blur" />
            <LeadCardContent>
              <h2>Amazing design</h2>
              <p> business with amazing design and great architecture</p>
              <button>
                Learn More <ArrowIcon />{' '}
              </button>
            </LeadCardContent>
          </li>
          <li>
            <Image src={Card_3} alt="Meeting" placeholder="blur" />
            <LeadCardContent>
              <h2>Amazing design</h2>
              <p> business with amazing design and great architecture</p>
              <button>
                Learn More <ArrowIcon />{' '}
              </button>
            </LeadCardContent>
          </li>
        </LeadCardList>
      </LeadCardContainer>
    </LeadCardSection>
  )
}

export default LeadCard
