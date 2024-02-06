import { Card } from "../../components/Card";
import { CardsSection, CardsContainer } from "../../components/Card/styles";
import { cards } from "../../mocks/cards";
import { ServicesContainer, ServicesTitle } from './styles'

export const Services = () => (
  <>
    <ServicesContainer>
      <ServicesTitle>Serviços</ServicesTitle>
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
