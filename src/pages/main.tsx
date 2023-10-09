import { cards } from '../mocks/cards'
import { Card } from '../components/Card'
import { CardsContainer, CardsSection } from '../components/Card/styles'
import { Hero } from '../components/Hero'
import { Grid } from '@mui/material'



export const MainPage = () => {
  return (
      <Grid container>
        <Grid item xs={12}>
          <Hero />
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
        </Grid>
      </Grid>
  )
}


// keyExtractor('card-item', index)
