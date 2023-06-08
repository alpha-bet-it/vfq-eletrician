import { createTheme } from '@mui/material'

export const Theme = createTheme({
    palette: {
        primary: {
            main: '#FDF7FA',
            contrastText: '#153243'
        },
        secondary: {
            main: '#153243',
            contrastText: '#E6EBE0'
        },
        background: {
            default: '#FDF7FA',
        },
        error: {
            main: '#ED6A5A',
        },
        success: {
            main: '#5CA4A9',
        },
        text: {
            primary: '#153243',
            secondary: '#E6EBE0'
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                color: 'secondary',
            }
        },
        MuiToolbar: {
            styleOverrides: {
                root: {

                }
            }
        }
    }
})
