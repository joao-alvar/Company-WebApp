import {NextSeo} from 'next-seo'

import AboutGrid from '@/modules/about/aboutGrid/AboutGrid'
import AboutWall from '@/modules/about/aboutWall/AboutWall'
import AboutCallToAction from '@/modules/about/callToAction/CallToAction'
import AboutHero from '@/modules/about/hero/AboutHero'
import Mission from '@/modules/about/mission/Mission'
import Story from '@/modules/about/story/Story'

const About = () => {
  const titleTag = 'About Us | Atalaso'
  const descriptionTag =
    'Learn about more about Atalaso, our mission, values, and commitment to excellence. Find out how Atalaso is making a difference in the industry and adding value.'
  const keywordsTag =
    'About page, who we are, mission and vision, our purpose, values, Atalaso'
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
        <AboutHero />
        <Mission />
        <AboutWall />
        <Story />
        <AboutGrid />
        <AboutCallToAction />
      </main>
    </>
  )
}

export default About
