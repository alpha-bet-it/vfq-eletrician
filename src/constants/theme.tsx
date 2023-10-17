import { createTheme } from '@mui/material'

export const Theme = createTheme({
    palette: {
        primary: {
            main: '#FDF7FA',
            contrastText: '#F4B324'
        },
        secondary: {
            main: '##F4B324',
            contrastText: '#FDF7FA'
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
