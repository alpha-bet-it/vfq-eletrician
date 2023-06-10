import { Button } from '@mui/material'
import styled from 'styled-components'

export const CarouselContainer = styled.div`
    width: 100%;
    max-width: 1920px;
    max-height: 770px;
    box-sizing: border-box;
    position: relative;
    display: flex;
    overflow: hidden;
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    inset: 0;
    padding: 0 2rem;
    align-items: center
`

export const ChevronBtn = styled(Button)`
    && {
        max-width: 80px;
        min-width: 50px;

        max-height: 80px;
        min-height: 50px;

        cursor: pointer;
        border-radius: 9999px;
        border: none;
        padding: 0.25rem;
        background-color: rgba(240, 246, 250, 0.6);
        &:hover {
            background-color: rgba(240, 246, 250)
        };
        &:active {
            background-color: rgba(240, 246, 250);
            box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),
                        0px 2px 2px 0px rgba(0,0,0,0.14),
                        0px 1px 5px 0px rgba(0,0,0,0.12);
        }
        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    }

`

export const CarouselIndicatorContainer = styled.div`
    position: absolute;
    bottom: 0.8rem;
    right: 0;
    left: 0;
`

export const IndicatorsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    row-gap: 1rem
`

export const Indicator = styled.div<{active?: boolean}>`
    width: ${props => props.active ? '.9rem' : '.8rem'};
    height: ${props => props.active ? '.9rem' : '.8rem'};
    border-radius: 9999px;
    background-color: ${props => props.active ? 'rgba(240, 246, 250)' : 'rgba(240, 246, 250, 0.6)'};
    margin: .2rem
`
