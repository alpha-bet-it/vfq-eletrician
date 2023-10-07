import { cards } from '../mocks/cards'
import { Card } from '../components/Card'
import { CardsContainer, CardsSection } from '../components/Card/styles'
import { Carousel } from '../components/Carousel'



export const MainPage = () => {
  return (
    <>
      <Carousel />
      <CardsSection>
        <CardsContainer>
          {
            cards.map(
              ({title, description}, index) => 
                <Card 
                  key={`card-item-${index}`}
                  title={title}
                  description={description}
                />
            )
          }
        </CardsContainer>
      </CardsSection>
    </>
  )
}


// keyExtractor('card-item', index)
