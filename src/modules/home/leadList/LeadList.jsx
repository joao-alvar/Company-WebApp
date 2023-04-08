import Image from 'next/image'
import {useState} from 'react'

import {Section} from '../hero/HeroElements'
import {TitleContainer} from '../leadGrid/LeadGridElements'
import {Container, ListContainer, ListContent} from './LeadListElements'

import Advertising from 'public/images/Advertising.jpg'
import Creativity from 'public/images/Creativity.jpg'
import Optimazation from 'public/images/Optimazation.jpg'
import Search from 'public/images/Search.jpg'
import Seo from 'public/images/Seo.jpg'
import WebDevelopment from 'public/images/WebDevelopment.jpg'

const LeadList = () => {
  const [isShown, setIsShown] = useState(0)

  //   const handleClick = (event) => {
  //  toggle shown state
  // setIsShown((current) => !current)
  //  or simply set it to true
  // setIsShown(true)
  //   }

  console.log(isShown)
  return (
    <Section>
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
              onClick={() => setIsShown(0)}
              className={isShown == 0 ? 'active' : null}
            >
              Advertasing
            </li>
            <li
              onClick={() => setIsShown(1)}
              className={isShown == 1 ? 'active' : null}
            >
              Web Development
            </li>
            <li
              onClick={() => setIsShown(2)}
              className={isShown == 2 ? 'active' : null}
            >
              Paid Search
            </li>
            <li
              onClick={() => setIsShown(3)}
              className={isShown == 3 ? 'active' : null}
            >
              SEO
            </li>
            <li
              onClick={() => setIsShown(4)}
              className={isShown == 4 ? 'active' : null}
            >
              Creative Solutions
            </li>
            <li
              onClick={() => setIsShown(5)}
              className={isShown == 5 ? 'active' : null}
            >
              Website optimazation and Accesibility
            </li>
          </ul>
          <ListContent>
            {isShown == 0 && (
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

            {isShown == 1 && (
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
            {isShown == 2 && (
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
            {isShown == 3 && (
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
            {isShown == 4 && (
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
            {isShown == 5 && (
              <div>
                <div className="image_container">
                  <Image
                    src={Optimazation}
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
