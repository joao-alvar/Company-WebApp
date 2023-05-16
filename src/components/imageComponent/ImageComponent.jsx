import Image from 'next/image'

import styled from 'styled-components'

const ImageStyled = styled(Image)`
  transition: opacity 2s;
  opacity: 0;
`

const ImageComponent = ({
  src,
  alt,
  width,
  height,
  className,
  quality,
  priority,
  viewBox,
  shapeRendering,
  style,
  draggable,
}) => {
  return (
    <>
      <ImageStyled
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        quality={quality}
        priority={priority}
        viewBox={viewBox}
        shapeRendering={shapeRendering}
        style={style}
        loading="lazy"
        placeholder="blur"
        draggable={draggable}
        onLoadingComplete={(image) => (image.style.opacity = 1)}
      />
    </>
  )
}

export default ImageComponent
