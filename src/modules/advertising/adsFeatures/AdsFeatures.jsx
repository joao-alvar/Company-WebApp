import ImageComponent from '@/components/imageComponent/ImageComponent'

import {Section} from '@/modules/home/hero/HeroElements'

import {
  Container,
  ListWrap,
  Wrapper,
  List,
  StyledList,
  ContentWrap,
  ImageWrap,
  Icon,
} from './AdsFeaturesElements'

import Image from '/public/images/couple-with-smartphones.jpeg'

const listItems = [
  {
    preTitle: 'What and how',
    title:
      'Increase click-through rates, drive conversions, and achieve better overall ROI',
    content: [
      {
        text: 'Ad quality score improvement: Monitor and improve your ad quality score, which impacts ad rankings and cost per click.',
      },
      {
        text: 'Landing page optimization: Ensure that your landing pages align with your ad messaging and provide a seamless user',
      },
      {
        text: 'Ad scheduling and bid adjustments: Analyze your campaign data to identify peak performance times and schedule your ads accordingly.',
      },
      {
        text: 'Ad copy testing: Experiment with different ad copy variations to identify the most compelling and effective messaging.',
      },
    ],
  },
]

const AdsFeatures = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <ContentWrap>
            <ImageWrap>
              <ImageComponent
                src={Image}
                alt="Young couple shopping online, man holding a credit card while woman holding tablet computer"
                className="image_2"
              />
            </ImageWrap>
            {listItems.map((item) => {
              return (
                <ListWrap key={item}>
                  <h3>{item.preTitle}</h3>
                  <h2>{item.title}</h2>
                  <StyledList item={item}>
                    {item.content.map((list, index) => {
                      return (
                        <List key={index}>
                          <Icon />
                          {list.text}
                        </List>
                      )
                    })}
                  </StyledList>
                </ListWrap>
              )
            })}
          </ContentWrap>
        </Wrapper>
      </Container>
    </Section>
  )
}

export default AdsFeatures
