import { cards } from '../mocks/cards'
import { Card } from '../components/Card'
import { CardsContainer, CardsSection } from '../components/Card/styles'
import { Carousel } from '../components/Carousel'
import { Img } from '../components/Img'



export const MainPage = () => {
  return (
    <>
      <Img src={'../images/trabalhador.jpg'} alt={'Eletricista cortando fios'} />
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
