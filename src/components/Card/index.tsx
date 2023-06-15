import { Typography } from '@mui/material'
import { CardContainer, CardsContainer, TextContainer } from './styled'

interface CardProps {
    title: string
    description: string
}

export const Card = (props: CardProps) => {
    return (
        <>
            <CardContainer>
                <TextContainer borderBottom={true}>
                    <h6>{props.title}</h6>
                </TextContainer>
                <TextContainer>
                    <p>{props.description}</p>
                </TextContainer>
            </CardContainer>
        </>
    )
}
