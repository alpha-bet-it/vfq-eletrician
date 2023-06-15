import { Card } from '../components/Card'
import { CardsContainer, CardsSection } from '../components/Card/styled'
import { Carousel } from '../components/Carousel'

const cards = [
  {
    title: 'ART',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Nemo, inventore. Similique quos fugiat soluta autem dolores. Rem
      molestias accusamus sed necessitatibus nulla voluptatem,
      optio facere? Architecto nemo perspiciatis illum quae!`,
  },
  {
    title: 'ART',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Nemo, inventore. Similique quos fugiat soluta autem dolores. Rem
      molestias accusamus sed necessitatibus nulla voluptatem,
      optio facere? Architecto nemo perspiciatis illum quae!`,
  },
  {
    title: 'ART',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Nemo, inventore. Similique quos fugiat soluta autem dolores. Rem
      molestias accusamus sed necessitatibus nulla voluptatem,
      optio facere? Architecto nemo perspiciatis illum quae!`,
  },
  {
    title: 'ART',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Nemo, inventore. Similique quos fugiat soluta autem dolores. Rem
      molestias accusamus sed necessitatibus nulla voluptatem,
      optio facere? Architecto nemo perspiciatis illum quae!`,
  },
  {
    title: 'ART',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Nemo, inventore. Similique quos fugiat soluta autem dolores. Rem
      molestias accusamus sed necessitatibus nulla voluptatem,
      optio facere? Architecto nemo perspiciatis illum quae!`,
  },
  {
    title: 'ART',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Nemo, inventore. Similique quos fugiat soluta autem dolores. Rem
      molestias accusamus sed necessitatibus nulla voluptatem,
      optio facere? Architecto nemo perspiciatis illum quae!`,
  }
]

export const MainPage = () => {
  return (
    <>
      <Carousel />
      <CardsSection>
        <CardsContainer>
          {cards.map(({title, description}) => <Card title={title} description={description}/>)}
        </CardsContainer>
      </CardsSection>
    </>
  )
}
