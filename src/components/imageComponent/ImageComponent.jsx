// import Image from 'next/image'

import styled from 'styled-components'

const ImageStyled = styled.span`
  transition: opacity 2s;
  opacity: 0;
`

const ImageComponent = ({
  src,
  alt,
  width,
  height,
  className,
  priority,
  style,
}) => {
  return (
    <>
      <ImageStyled
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        quality={75}
        priority={priority}
        placeholder="blur"
        style={style}
        onLoadingComplete={(image) => (image.style.opacity = 1)}
      />
    </>
  )
}

export default ImageComponent
