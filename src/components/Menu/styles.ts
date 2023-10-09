import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AppBar, AppBarProps } from '@mui/material'

interface IAppBarProps extends AppBarProps {
    boxShadow?: string
    backgroundColor?: string
}

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

export const StyledAppBar = styled(AppBar)`
    background-color: 'rgba(230, 235, 224, 0.6)',
    boxShadow: 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    opacity: 0.5
`
