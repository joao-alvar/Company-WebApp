import ImageComponent from '@/components/imageComponent/ImageComponent'

import {ContentContainer, Wrapper, ImageWrap} from './HeaderContentElements'

import img from 'public/images/Rocket-illustration.jpeg'

const HeaderContent = () => {
  return (
    <>
      <ContentContainer>
        <Wrapper>
          <h1>Doubts? We can help you.</h1>
          <p>
            Ask us about our products, pricing or implementation. Our experts
            are here to help you chart a path to success.
          </p>
          <ImageWrap>
            <ImageComponent src={img} alt="" />
          </ImageWrap>
        </Wrapper>
      </ContentContainer>
    </>
  )
}

export default HeaderContent
