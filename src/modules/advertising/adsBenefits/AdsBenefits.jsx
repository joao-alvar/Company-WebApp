import Image from 'next/image'
import {FaPiggyBank} from 'react-icons/fa'

import {Section} from '@/modules/home/hero/HeroElements'

import {
  Container,
  Wrapper,
  Grid,
  GridContent,
  IconWrap,
} from './AdsBenefitsElements'

import illustration_1 from '/public/images/Trend.jpeg'

const AdsBenefits = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Grid>
            <GridContent>
              <IconWrap as={FaPiggyBank} />
              <h2>Pay the same amount every month</h2>
              <p>
                No more fluctuating power bills. By switching to solar, you’ll
                pay the same amount every month for the length of your loan.
              </p>
            </GridContent>
            <GridContent>
              <IconWrap as={FaPiggyBank} />
              <h2>Pay the same amount every month</h2>
              <p>
                No more fluctuating power bills. By switching to solar, you’ll
                pay the same amount every month for the length of your loan.
              </p>
            </GridContent>
            <GridContent>
              <IconWrap as={FaPiggyBank} />
              <h2>Pay the same amount every month</h2>
              <p>
                No more fluctuating power bills. By switching to solar, you’ll
                pay the same amount every month for the length of your loan.
              </p>
            </GridContent>
            <GridContent>
              <IconWrap as={FaPiggyBank} />
              <h2>Pay the same amount every month</h2>
              <p>
                No more fluctuating power bills. By switching to solar, you’ll
                pay the same amount every month for the length of your loan.
              </p>
            </GridContent>
          </Grid>
        </Wrapper>
      </Container>
    </Section>
  )
}

export default AdsBenefits
