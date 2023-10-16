import styled from 'styled-components'


export const HeroText = styled.h1`
    font-family: Poppins, sans-serif;
    font-size: 4.5rem;
    font-weight: 700;
    color: #FDF7FA;
    margin-top: 15%;
    width: 60%;
    max-width: 100%;
    letter-spacing: 0.03rem;
    line-height: 5.5rem;

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

export const HeroParagraph = styled.p`
    
`
