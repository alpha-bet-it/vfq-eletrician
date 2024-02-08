// import { Typography } from '@mui/material'
import { Title } from '../Title'
import { CardContainer } from './styles'

interface CardProps {
    title: string
    description: string
}

export const Card = (props: CardProps) => {
    return (
        <>
            <CardContainer>
                    <Title
                        color='var(--light-color)'
                        fontSize='1.7rem'
                    >{props.title}</Title>
                    <p>{props.description}</p>
            </CardContainer>
        </>
    )
}
