import styled from 'styled-components'

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #303030; background: -moz-linear-gradient(0deg,  #303030 0%,#5d5d5d 100%); background: -webkit-linear-gradient(0deg,  #303030 0%,#5d5d5d 100%); background: linear-gradient(0deg,  #303030 0%,#5d5d5d 100%);
    margin: 1rem;
    max-width: calc(100%/3);
    position: relative;
    min-height: 400px;
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
    transition: box-shadow ease-in-out 0.2s;
    &:hover div h6 {
        inset: auto auto 300px;
        transition: inset .3s ease-out
    };
    &:hover div p {
        opacity: 1;
        transition: opacity .2s .4s ease-out
    }
`

export const TextContainer = styled.div<{borderBottom?: boolean}>`
    width: 100%;
    && > h6 {
        font-size: 1.8rem;
        padding-bottom: 0.5rem;
        position: absolute;
        inset: auto auto 30px;
        transition: inset .3s .3s ease-out
    };

    & > p {
        font-size: 1.1rem;
        inset: auto auto 80px;
        opacity: 0;
        position: absolute;
        transition: opacity .3s ease-out
    };
    & > p, h6 {
        letter-spacing: .05rem;
        padding: 1.2rem;
        line-height: 1.4rem;
    };
    color: rgba(240, 246, 250);
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
