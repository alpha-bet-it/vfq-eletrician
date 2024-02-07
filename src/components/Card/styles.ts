import styled from 'styled-components'

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--main-color-dark);
    margin: 1rem;
    width: 80%;
    max-width: 100%;
    position: relative;
    min-height: 35vh;
    max-height: 50vh;
    width: 100%;
    flex: 1 0 25%;
    border-radius: 5px;
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.1),
                0px 4px 5px 0px rgba(0,0,0,0.1),
                0px 1px 10px 0px rgba(0,0,0,0.1);
    &:hover {
        box-shadow: 0px 4px 5px -3px rgba(0,0,0,0.3),
                    0px 6px 7px 0px rgba(0,0,0,0.3),
                    0px 2px 12px 0px rgba(0,0,0,0.3);
        cursor: pointer;
    }
    transition: box-shadow ease-out 0.4s;
    
    @media(max-width: 500px) {
        flex: 100%;
        height: 80vh
    }
    @media(max-height: 400px) {
        height: 80vh;
        flex: 1 0 30%;
    }
`

export const TextContainer = styled.div<{borderBottom?: boolean}>`
    width: 100%;
    && > h6 {
        font-size: 1.8rem;
        line-height: 2.2rem;
        letter-spacing: .05rem;
    };

    & > p {
        position: absolute;
        font-size: 1.1rem;
        font-weight: 400;
        letter-spacing: .02rem
    };

    & > p, h6 {
        padding: 1.2rem 1.2rem 0 1.2rem;
        line-height: 1.4rem;
        font-family: var(--font-family);
    };
    color: var(--light-color);
`

export const CardsSection = styled.section`
    display: flex;
    justify-content: space-around;
`

export const CardsContainer = styled.div`
    max-width: 80%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 2.2rem
`
