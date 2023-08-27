import {NextSeo} from 'next-seo'

import CallToAction from '@/modules/software-development/callToAction/CallToAction'
import DevCases from '@/modules/software-development/devCases/DevCases'
import DevFeatures from '@/modules/software-development/devFeatures/DevFeatures'
import GridSection from '@/modules/software-development/devGrid/Grid'
import DevLead from '@/modules/software-development/devLead/DevLead'
import DevWall from '@/modules/software-development/devWall/DevWall'
import Hero from '@/modules/software-development/hero/Hero'

const solutions = () => {
  const titleTag =
    'Software development solutions | Be at the forefront of innovation | Atalaso'
  const descriptionTag = `Atalaso's provides software development solutions for your business. Our expert team specializes in creating custom software solutions tailored to your specific needs and requirements.`
  const keywordsTag =
    'Atalaso, software development, custom software, software solutions, software development services, digital, technology innovation, tech, software development company'
  return (
    <>
      <NextSeo
        title={titleTag}
        description={descriptionTag}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: keywordsTag,
          },
        ]}
      />
      <main role="main">
        <Hero />
        <DevLead />
        <DevWall />
        <GridSection />
        <DevCases />
        <DevFeatures />
        <CallToAction />
      </main>
    </>
  )
}

export default solutions
