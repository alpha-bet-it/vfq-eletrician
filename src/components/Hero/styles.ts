import styled from 'styled-components'


export const HeroText = styled.h1`
    font-family: Poppins, sans-serif;
    font-size: 5rem;
    font-weight: 700;
    color: #FDF7FA;
    margin-top: 10rem;
    width: 100%;
    max-width: 75%;
    letter-spacing: 0.03rem;
    line-height: 5.5rem;

    @media(max-width: 1240px) {
        margin-top: 8rem
    }

    @media(max-width: 970px) {
        font-size: 4rem;
        margin-top: 10rem;
        line-height: 4.5rem
    }

    @media(max-width: 500px) {
        font-size: 3.5rem;
        margin-top: 12rem;
        line-height: 3.5rem
    }
`
