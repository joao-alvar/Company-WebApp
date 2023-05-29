import Image from 'next/image'
import React from 'react'

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
            <Image
              src={imageDesktop}
              alt="CallCenter woman giving chat support and a laptop on the desk illustration"
              width={500}
              height={500}
              className="desktop"
            />
            <Image
              src={imageMobile}
              alt="CallCenter woman giving chat support and a laptop on the desk illustration"
              width={300}
              height={300}
              className="mobile"
            />
          </ImageContainer>
        </ModalContent>
      </ModalContainer>
    </>
  )
}

export default Modal
