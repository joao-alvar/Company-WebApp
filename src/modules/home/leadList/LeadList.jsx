import Image from 'next/image'
import {useState} from 'react'

import {Section} from '../hero/HeroElements'
import {TitleContainer} from '../leadGrid/LeadGridElements'
import {Container, ListContainer, ListContent} from './LeadListElements'

import Advertising from 'public/images/Advertising.jpg'
import Creativity from 'public/images/Creativity.jpg'
import Optimization from 'public/images/Optimization.jpg'
import Search from 'public/images/Search.jpg'
import Seo from 'public/images/Seo.jpg'
import WebDevelopment from 'public/images/WebDevelopment.jpg'

const LeadList = () => {
  const [isShow, setIsShow] = useState(0)

  return (
    <Section name="Overview" id="overview">
      <Container>
        <TitleContainer>
          <h2>Send, spend and save smarter</h2>
          <h3>
            Make day-to-day spending a breeze with all things money in one place
          </h3>
        </TitleContainer>
        <ListContainer>
          <ul>
            <li
              onClick={() => setIsShow(0)}
              className={isShow == 0 ? 'active' : null}
            >
              Advertising
            </li>
            <li
              onClick={() => setIsShow(1)}
              className={isShow == 1 ? 'active' : null}
            >
              Web Development
            </li>
            <li
              onClick={() => setIsShow(2)}
              className={isShow == 2 ? 'active' : null}
            >
              Paid Search
            </li>
            <li
              onClick={() => setIsShow(3)}
              className={isShow == 3 ? 'active' : null}
            >
              SEO
            </li>
            <li
              onClick={() => setIsShow(4)}
              className={isShow == 4 ? 'active' : null}
            >
              Creative Solutions
            </li>
            <li
              onClick={() => setIsShow(5)}
              className={isShow == 5 ? 'active' : null}
            >
              Website optimization and Accessibility
            </li>
          </ul>
          <ListContent>
            {isShow == 0 && (
              <div>
                <div className="image_container">
                  <Image
                    src={Advertising}
                    alt="Computer and design"
                    placeholder="bluer"
                    height="400"
                  />
                </div>
                <div className="text_container">
                  <h3 className="title">Some content here</h3>
                  <h3 className="text_content">
                    After working with thousands of clients and being trusted
                    with $450+ million in annual ad spend, we know what it takes
                    to be successful.
                  </h3>
                </div>
              </div>
            )}

            {isShow == 1 && (
              <div>
                <div className="image_container">
                  <Image
                    src={WebDevelopment}
                    alt="Computer and design"
                    placeholder="bluer"
                    height="400"
                    width="800"
                  />
                </div>
                <div className="text_container">
                  <h3 className="title">Some content here</h3>
                  <h3 className="text_content">
                    After working with thousands of clients and being trusted
                    with $450+ million in annual ad spend, we know what it takes
                    to be successful.
                  </h3>
                </div>
              </div>
            )}
            {isShow == 2 && (
              <div>
                <div className="image_container">
                  <Image
                    src={Search}
                    alt="Computer and design"
                    placeholder="bluer"
                    height="400"
                    width="700"
                  />
                </div>
                <div className="text_container">
                  <h3 className="title">Some content here</h3>
                  <h3 className="text_content">
                    After working with thousands of clients and being trusted
                    with $450+ million in annual ad spend, we know what it takes
                    to be successful.
                  </h3>
                </div>
              </div>
            )}
            {isShow == 3 && (
              <div>
                <div className="image_container">
                  <Image
                    src={Seo}
                    alt="Computer and design"
                    placeholder="bluer"
                    height="400"
                    width="800"
                  />
                </div>
                <div className="text_container">
                  <h3 className="title">Some content here</h3>
                  <h3 className="text_content">
                    After working with thousands of clients and being trusted
                    with $450+ million in annual ad spend, we know what it takes
                    to be successful.
                  </h3>
                </div>
              </div>
            )}
            {isShow == 4 && (
              <div>
                <div className="image_container">
                  <Image
                    src={Creativity}
                    alt="Computer and design"
                    placeholder="bluer"
                    height="400"
                    className="test"
                  />
                </div>
                <div className="text_container">
                  <h3 className="title">Some content here</h3>
                  <h3 className="text_content">
                    After working with thousands of clients and being trusted
                    with $450+ million in annual ad spend, we know what it takes
                    to be successful.
                  </h3>
                </div>
              </div>
            )}
            {isShow == 5 && (
              <div>
                <div className="image_container">
                  <Image
                    src={Optimization}
                    alt="Computer and design"
                    placeholder="bluer"
                    height="400"
                    width="800"
                  />
                </div>
                <div className="text_container">
                  <h3 className="title">Some content here</h3>
                  <h3 className="text_content">
                    After working with thousands of clients and being trusted
                    with $450+ million in annual ad spend, we know what it takes
                    to be successful.
                  </h3>
                </div>
              </div>
            )}
          </ListContent>
        </ListContainer>
      </Container>
    </Section>
  )
}

export default LeadList
