import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Box, BoxProps } from '@mui/material'

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:hover {
        color: #ccc;
    };
    &:active {
        color: red;
    }
`

export const ImageContainer = styled.div`
    flexGrow: 1;
`
