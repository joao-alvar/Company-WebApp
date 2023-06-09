// import Image from 'next/image'

import Link from 'next/link'

import ImageComponent from '@/components/imageComponent/ImageComponent'

import {
  GridSection,
  Container,
  Icon,
  GridWrap,
  Cards,
  CardContent,
  TextWrap,
  ImageWrap,
} from './LeadBenefitsElements'

import image_2 from 'public/images/office-and-computer-image.jpeg'
import image_1 from 'public/images/two-people-looking-tablet.jpeg'
import image_3 from 'public/images/typing-in-notebook.jpeg'

const leadBenefits = () => {
  return (
    <GridSection id="section-1">
      <Container>
        <GridWrap>
          <Cards>
            <CardContent>
              <TextWrap>
                <h2>Revolutionizing your business for the future</h2>
                <p>
                  Digital transformation has become an imperative for businesses
                  seeking to stay relevant and competitive in today&apos;s
                  rapidly evolving world. It encompasses the strategic adoption
                  and integration of digital technologies across all aspects of
                  an organization, fundamentally reshaping the way business is
                  conducted.
                </p>
                <Link href="/web-development">
                  Explore <Icon />
                </Link>
              </TextWrap>
            </CardContent>
            <ImageWrap>
              <ImageComponent
                src={image_1}
                alt="Business people having meeting in office hall near window."
                className="image_one"
              />
            </ImageWrap>
          </Cards>
          <Cards>
            <ImageWrap>
              <ImageComponent
                src={image_2}
                alt="Modern office technology innovative screen devices."
                className="image_two"
              />
            </ImageWrap>
            <CardContent>
              <TextWrap>
                <h2>The vital role of technology in scaling your business.</h2>
                <p>
                  In today&apos;s fast-paced digital landscape, harnessing the
                  power of technology is essential for businesses looking to
                  achieve sustainable growth and expand their operations.
                  Technology plays a pivotal role in enabling scalability,
                  providing businesses with the tools and capabilities to
                  streamline processes, improve efficiency, and tap into new
                  opportunities.
                </p>
              </TextWrap>
            </CardContent>
          </Cards>
          <Cards>
            <CardContent>
              <TextWrap>
                <h2>Marketing frontier, empowering businesses for success</h2>
                <p>
                  With our deep expertise and progressive strategies, we
                  understand the ever-evolving digital landscape and how to
                  navigate it effectively. We harness the power of data-driven
                  insights, innovative technologies, and creative thinking to
                  create customized digital marketing solutions that deliver
                  tangible and measurable outcomes.
                </p>
                <Link href="/advertising">
                  Explore <Icon />
                </Link>
              </TextWrap>
            </CardContent>
            <ImageWrap>
              <ImageComponent
                src={image_3}
                alt="Person typing on laptop and social media marketing icons floating"
              />
            </ImageWrap>
          </Cards>
        </GridWrap>
      </Container>
    </GridSection>
  )
}

export default leadBenefits
