import { cards } from '../mocks/cards'
import { Card } from '../components/Card'
import { CardsContainer, CardsSection } from '../components/Card/styles'
import { Hero } from '../components/Hero'
import { Grid } from '@mui/material'

// TODO:adicionar tag referencia
// TODO <a href="https://br.freepik.com/fotos-gratis/um-tecnico-em-eletricidade-trabalhando-em-uma-central-com-fusiveis_10507549.htm#page=2&query=eletricity&position=10&from_view=search&track=sph">Imagem de pvproductions</a> no Freepik



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
