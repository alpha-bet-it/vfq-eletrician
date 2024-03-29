import HeroImage from '../../images/tecnico.jpg'
import { Box } from '@mui/material'
import { HeroText } from './styles'

export const Hero = () => {
    return (
        <Box
            sx={{
                marginTop: '145px',
                width: '100%',
                height: '800px',
                maxHeight: '800px',
                backgroundImage: `url(${HeroImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '50% 50%',
            }}
        >
            <Box
                sx={{
                    background: 'linear-gradient(90deg, rgba(23, 20, 41, 1) 50%, rgba(42, 37, 77, 0.4) 120%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Box
                    sx={{
                        maxWidth: '80%',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <HeroText>
                        Soluções elétricas confiáveis para sua casa ou negócio.
                    </HeroText>
                </Box>
            </Box>
            
        </Box>
        
    )
}

// Container (imagem de background)
//   -> TextBox (texto)
