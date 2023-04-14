import React, {useState} from 'react'

import {Section} from '@/modules/home/hero/HeroElements'

import {Container, Icon, List, ListContent, StyledList} from './DevListElements'

import DevicesIllustrationImg from 'public/images/DevicesIllustration.jpeg'
import OptimizationImg from 'public/images/Optimized.jpeg'
import TrendImg from 'public/images/Trend.jpeg'

const DevList = () => {
  const [show, setShow] = useState(0)
  return (
    <Section>
      <Container>
        <h2>Focus areas within technology</h2>
        <p>
          Make day-to-day spending a breeze with all things money in one place
        </p>
        <StyledList>
          <List
            onClick={() => setShow(0)}
            className={show == 0 ? 'active' : null}
          >
            <Icon
              src={OptimizationImg}
              height={300}
              width={300}
              className={show == 0 ? 'show' : null}
            />
            <span>Accelerating tech adoption</span>
          </List>
          <List
            onClick={() => setShow(1)}
            className={show == 1 ? 'active' : null}
          >
            <Icon
              src={TrendImg}
              height={300}
              width={300}
              className={show == 1 ? 'show' : null}
            />
            <span>Delivering trust and transparency</span>
          </List>
          <List
            onClick={() => setShow(2)}
            className={show == 2 ? 'active' : null}
          >
            <Icon
              src={DevicesIllustrationImg}
              height={300}
              width={500}
              className={show == 2 ? 'show' : null}
            />
            <span>Strategic planing and development</span>
          </List>
        </StyledList>
        {show == 0 && (
          <ListContent>
            <h2>Improve your conversions to get more sales.</h2>
            <p>
              Building trust today is as critical as delivering the tools and
              solutions for the future. The speed of technological innovation,
              the vast amounts of data being generated, stored, and shared and
              an increasingly interconnected world require intense focus on
              authenticity and transparency. PwC works with your team to help
              you build the trust needed to maintain a competitive advantage and
              sustain long-term growth.
            </p>
          </ListContent>
        )}
        {show == 1 && (
          <ListContent>
            <h2>Accelerating tech adoption</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
              modi voluptas nam numquam! Numquam consequuntur porro, quam autem
              harum provident nam debitis? Veniam quibusdam hic dolor sapiente
              asperiores consequuntur mollitia?
            </p>
          </ListContent>
        )}
        {show == 2 && (
          <ListContent>
            <h2>Strategic planing and development</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
              modi voluptas nam numquam! Numquam consequuntur porro, quam autem
              harum provident nam debitis? Veniam quibusdam hic dolor sapiente
              asperiores consequuntur mollitia?
            </p>
          </ListContent>
        )}
      </Container>
    </Section>
  )
}

export default DevList
