import {useState} from 'react'

import {Section} from '@/modules/home/hero/HeroElements'

import {
  Container,
  Title,
  Wrapper,
  ListItems,
  Card,
  Icon,
  Button,
  ActiveContent,
  Text,
} from './AccordionElements'

const listItems = [
  {
    title: 'Tailored solutions',
    content:
      'We believe in a personalized approach. We take the time to understand your unique business goals, target audience, and challenges to develop customized marketing solutions that align with your specific needs. Our strategies are designed to maximize your ROI and deliver exceptional results.',
  },
  {
    title: 'Innovation and creativity',
    content:
      'We thrive on innovation and embrace creative thinking. We constantly explore new ideas, emerging technologies, and industry best practices to ensure that our clients stay ahead of the competition. Our innovative approach helps your brand stand out, captivate your audience, and drive growth.',
  },
  {
    title: 'Results-oriented approach',
    content: `We are committed to delivering tangible results. Our focus is on achieving your business objectives, whether it's increasing brand awareness, generating leads, or driving conversions. We set measurable goals, track key metrics, and continuously refine our strategies to ensure that you get the best possible outcomes.`,
  },
  {
    title: 'Long-term partnership',
    content:
      'We strive to build long-term partnerships with our clients. Our commitment extends beyond delivering short-term results. We are dedicated to your success and work closely with you to adapt and evolve your marketing strategies as your business grows and evolves.',
  },
  {
    title: 'Transparent communication',
    content:
      'We believe in open and transparent communication with our clients. Throughout our partnership, we keep you informed about the progress of your marketing initiatives, provide regular updates, and maintain a collaborative relationship. We value your input and actively seek your feedback to ensure your satisfaction.',
  },
]

const Accordion = () => {
  const [isActive, setIsActive] = useState(0)

  return (
    <Section>
      <Container>
        <Title>Why Choose Us?</Title>
        <Wrapper>
          <Card>
            {listItems.map((item, index) => {
              return (
                <ListItems
                  item={item}
                  key={index}
                  onClick={() => setIsActive(index)}
                  className={isActive === index && 'active'}
                >
                  <Button
                    className={
                      isActive === index ? 'active no_select' : 'no_select'
                    }
                  >
                    {item.title}
                    <Icon className={isActive === index && 'active'} />
                  </Button>
                  <ActiveContent className={isActive === index && 'active'}>
                    <Text>{item.content}</Text>
                  </ActiveContent>
                </ListItems>
              )
            })}
          </Card>
        </Wrapper>
      </Container>
    </Section>
  )
}

export default Accordion
