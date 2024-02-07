import styled from 'styled-components'

export const AboutSection = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 3rem;
`

export const AboutContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
`

export const AboutText = styled.p`
    font-size: 1.2rem;
    font-family: var(--font-family);
    margin: 0 auto;
`

export const AboutTextAndImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 2rem;
    @media(max-width: 1050px) {
        & > div {
            display: flex;
            flex-direction: row;
            width: 100%;
        }
        & > img {
            display: none;
        }
    }
`
