import { Hero } from '../sections/Hero'
import { Grid } from '@mui/material'
import { About } from '../sections/About'
import { Services } from '../sections/Services'

// TODO:adicionar tag referencia
// TODO <a href="https://br.freepik.com/fotos-gratis/um-tecnico-em-eletricidade-trabalhando-em-uma-central-com-fusiveis_10507549.htm#page=2&query=eletricity&position=10&from_view=search&track=sph">Imagem de pvproductions</a> no Freepik



export const MainPage = () => {
  return (
      <Grid container>
        <Grid item xs={12}>
          <Hero />
          <About />
          <Services />
        </Grid>
      </Grid>
  )
}


// keyExtractor('card-item', index)
