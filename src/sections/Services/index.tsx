import { Card } from "../../components/Card";
import { CardsSection, CardsContainer } from "../../components/Card/styles";
import { Title } from '../../components/Title'
import { cards } from "../../mocks/cards";
import { ServicesContainer } from './styles'

export const Services = () => (
  <>
    <ServicesContainer>
      <Title>Serviços</Title>
      <CardsSection>
        <CardsContainer>
          {cards.map(({ title, description }, index) => (
            <Card
              key={`card-item-${index}`}
              title={title}
              description={description}
            />
          ))}
        </CardsContainer>
      </CardsSection>
    </ServicesContainer>
  </>
);
