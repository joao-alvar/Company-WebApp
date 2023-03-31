import React from 'react'
import {LazyLoadImage, trackWindowScroll} from 'react-lazy-load-image-component'

const LazyImage = ({
  image,
  alt,
  height,
  src,
  width,
  scrollPosition,
  as,
  trackWindowScroll,
}) => (
  <>
    <LazyLoadImage
      alt={alt}
      as={as}
      height={height}
      src={src} // use normal <img> attributes as props
      width={width}
      scrollPosition={scrollPosition}
    />
    {/* <span>{caption}</span> */}
  </>
)

export default trackWindowScroll(LazyImage)
