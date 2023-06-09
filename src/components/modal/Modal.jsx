import ImageComponent from '../imageComponent/ImageComponent'
import {
  ModalButtonReturn,
  ModalContainer,
  ModalContent,
  ReturnIcon,
  ImageContainer,
  TextContainer,
  ButtonModal,
} from './ModalElements'

import imageMobile from '/public/images/email-illustration-mobile.jpeg'
import imageDesktop from '/public/images/support.jpg'

const Modal = ({className, onClick}) => {
  return (
    <>
      <ModalContainer className={className}>
        <ModalContent>
          <ModalButtonReturn
            aria-label="Menu"
            role="close modal"
            data-clog-click
          >
            <ReturnIcon onClick={onClick} />
          </ModalButtonReturn>
          <TextContainer>
            <h2>Thank you for reaching out to us!</h2>
            <p>
              We appreciate your interest. Our team is now reviewing your
              inquiry and will respond to you as soon as possible.
            </p>
            <ButtonModal href="/">Go home</ButtonModal>
          </TextContainer>
          <ImageContainer>
            <ImageComponent
              src={imageDesktop}
              alt="Man sitting on a chair and typing on a laptop and an ok hand icon floating illustration"
              width={500}
              height={500}
              className="desktop"
              priority={true}
            />
            <ImageComponent
              src={imageMobile}
              alt="Woman in front a laptop and mail icons floating illustration"
              className="mobile"
              priority={true}
            />
          </ImageContainer>
        </ModalContent>
      </ModalContainer>
    </>
  )
}

export default Modal
