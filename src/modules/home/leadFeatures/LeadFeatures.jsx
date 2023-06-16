import {
  Section,
  Container,
  Wrapper,
  ContentContainer,
  Header,
  List,
  ListItem,
} from './LeadFeaturesElements'

const LeadFeatures = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Header>
            <h2>Relax, we take care of you</h2>
          </Header>
          <ContentContainer>
            <List>
              <ListItem>
                <div>
                  <h3>Technology transformation</h3>
                  <p>
                    Innovation is the key to success, our solutions are designed
                    to provide your business with the right tools to reach new
                    heights.
                  </p>
                  <p>
                    At Atalaso, we specialize in providing cutting-edge
                    technology solutions tailored to meet your unique needs.
                  </p>
                </div>
              </ListItem>
              <ListItem>
                <div>
                  <h3>eCommerce</h3>
                  <p>
                    Our eCommerce solution is designed to revolutionize your
                    online business.
                  </p>
                  <p>
                    Providing you with a robust platform and the necessary tools
                    to thrive in the competitive digital landscape
                  </p>
                </div>
              </ListItem>
              <ListItem>
                <div>
                  <h3>Advertising operations</h3>
                  <p>
                    In today&apos;s digital landscape, a strong digital presence
                    is vital for businesses to thrive.
                  </p>
                  <p>
                    We offer a comprehensive approach to expand your
                    company&apos;s reach, engage your target audience, and drive
                    meaningful results
                  </p>
                </div>
              </ListItem>
              <ListItem>
                <div>
                  <h3>Optimization</h3>
                  <p>
                    Our SEO solution is designed to optimize your digital
                    footprint and improve your search visibility.
                    {/* we ensure that your website is fully optimized
                    for search engines.
                    Our team of experts stays up-to-date
                    with the latest SEO trends and algorithms, implementing
                    proven strategies */}
                  </p>
                  <p>
                    Through strategic planning, keyword research and on-page
                    optimization.
                  </p>
                </div>
              </ListItem>
            </List>
          </ContentContainer>
        </Wrapper>
      </Container>
    </Section>
  )
}

export default LeadFeatures
