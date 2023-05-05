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

import mail_illustration from '/public/images/mail_illustration.png'
import support_illustration from '/public/images/support.jpg'

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
            <h2>Thank you for submitting!</h2>
            <p>
              from the common confirmation and appreciation words, this example
              offers instructions to guide users to download the company&apos;s
              mobile app. If they don&apos;t want to download it directly on the
              website, they can choose to type in their phone number and receive
              a link
            </p>
            <ButtonModal href="https://atalaso.com">Go home</ButtonModal>
          </TextContainer>
          <ImageContainer>
            <Image
              src={support_illustration}
              alt="CallCenter woman giving chat support and a laptop on the desk illustration"
              width={500}
              height={500}
              className="desktop"
            />
            <Image
              src={mail_illustration}
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
