import { Typography } from '@mui/material'
// import styled from 'styled-components'
import { styled } from '@mui/material/styles'

export const HeroText = styled(Typography)(({theme}) => `
    font-family: Poppins, sans-serif;
    font-size: 3.5rem;
    font-weight: 700;
    color:  ${theme.palette.primary.contrastText}};
    margin-top: 15%;
    width: 60%;
    max-width: 100%;
    letter-spacing: 0.03rem;
    line-height: 4.2rem;

    @media(max-width: 970px) {
        font-size: 4rem;
        line-height: 4.5rem
    }

    @media(max-width: 500px) {
        font-size: 3rem;
        margin-top: 50%;
        line-height: 3.5rem;
        width: 100%
    }
`)
