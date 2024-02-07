import styled from 'styled-components'


export const HeroText = styled.h1`
    font-size: 3.5rem;
    font-weight: 700;
    color: #FDF7FA;
    margin-top: 20%;
    width: 50%;
    max-width: 100%;
    letter-spacing: 0.03rem;
    line-height: 4.5rem;

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
`
