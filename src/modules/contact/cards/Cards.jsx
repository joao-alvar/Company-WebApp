import {Container, GridList, Icon, List} from './CardsElements'

const Cards = () => {
  return (
    <Container>
      <GridList>
        <List>
          <Icon />
          <div>
            <p>
              One flexible tool for your entire company to share knowledge, ship
              projects, and collaborate.
            </p>
          </div>
        </List>
        <List>
          <Icon />
          <div>
            <p>
              One flexible tool for your entire company to share knowledge, ship
              projects, and collaborate.
            </p>
          </div>
        </List>
        <List>
          <Icon />
          <div>
            <p>
              One flexible tool for your entire company to share knowledge, ship
              projects, and collaborate.
            </p>
          </div>
        </List>
      </GridList>
    </Container>
  )
}

export default Cards
