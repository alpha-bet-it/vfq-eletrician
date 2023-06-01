import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
