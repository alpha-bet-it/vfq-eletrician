import HeroImage from '../../images/tecnico.jpg'
import { Box } from '@mui/material'
import { HeroText } from './styles'

export const Hero = () => {
    return (
        <Box
            sx={{
                marginTop: '145px',
                width: '100%',
                height: '700px',
                maxHeight: '700px',
                backgroundImage: `url(${HeroImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '50% 50%',
            }}
        >
            <Box
                sx={{
                    backgroundColor: 'rgba(21,50,66, 0.6)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Box
                    sx={{
                        maxWidth: '80%',
                        display: 'flex'
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