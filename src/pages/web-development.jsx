import React from 'react'

const Hero = React.lazy(() => import('@/modules/web-development/hero/Hero'))

const solutions = () => {
  return (
    <>
      <Hero />
    </>
  )
}

export default solutions
