import { Img } from '../Img'
import HeroImage from '../../images/lampada.jpg'
import { Box } from '@mui/material'

export const Hero = () => {
    return (
        <Box
            sx={{
                marginTop: '140px'
            }}
        >
            <Img 
                src={HeroImage}
                alt='Trabalhador'
                sx={{ 
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    maxWidth: '100%',
                    backgroundColor: '#153243',

                    // maxWidth: '100%',
                    // height: '100%',
                    // overflowClipMargin: 'content-box',
                    // overflow: 'clip',
                    // aspectRatio: 1630/780,
                }}
            />
        </Box>
        
    )
}

// Container (imagem de background)
//   -> TextBox (texto)
