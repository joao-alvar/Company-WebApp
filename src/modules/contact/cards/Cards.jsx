import {Container, GridList, Icon, List} from './CardsElements'

const Cards = () => {
  return (
    <Container>
      <GridList>
        <List>
          <Icon />
          <div>
            <p>
              We understand that every business is unique, and we take a
              customized approach to meet your specific needs. providing
              tailored strategies that will drive your success.
            </p>
          </div>
        </List>
        <List>
          <Icon />
          <div>
            <p>
              We are committed to delivering high-quality services. Our focus on
              excellence means that we strive for perfection in every aspect of
              our work.
            </p>
          </div>
        </List>
        <List>
          <Icon />
          <div>
            <p>
              We stay at the forefront of industry trends and embrace
              innovation. Our ability to adapt to changing market dynamics means
              that we can offer you the most effective and up-to-date solutions.
            </p>
          </div>
        </List>
      </GridList>
    </Container>
  )
}

export default Cards
