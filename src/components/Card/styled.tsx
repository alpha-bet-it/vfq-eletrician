import styled from 'styled-components'

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(230, 235, 224, 0.6);
    margin: 1rem;
    max-width: calc(100%/3);
    width: 100%;
    flex: 1 0 25%;
    border-radius: 5px;
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.1),
                0px 4px 5px 0px rgba(0,0,0,0.1),
                0px 1px 10px 0px rgba(0,0,0,0.1);
    &:hover {
        transform: scale(1.02);
        cursor: pointer;
    }
    transition: ease-in-out 0.2s
`

export const TextContainer = styled.span<{borderBottom?: boolean}>`
    width: 100%;
    && > h6 {
        font-size: 1.3rem;
        padding-bottom: 0.5rem
    };
    & > p {
        font-size: 1.1rem;
    };
    & > p, h6 {
        letter-spacing: .05rem;
        padding: 1.2rem;
        line-height: 1.4rem;
    };
    color: rgba(21, 50, 67);
    border-bottom: ${props => props.borderBottom ? '1px solid rgba(21, 50, 67)' : 'none'};
`

export const CardsSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 2rem 0;
    width: 100%;
`

export const CardsContainer = styled.section`
    max-width: 80%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
