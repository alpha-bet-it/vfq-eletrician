import { Box } from '@mui/material'
import { Title } from '../../components/Title'
import { AboutContainer, AboutSection, AboutText, AboutTextAndImageContainer } from './styles'
import AboutImgSection from '../../images/lampada.jpg'
import { Img } from '../../components/Img'

export const About = () => (
    <>
        <AboutSection id='sobre'>
            <AboutContainer>
                <Title>Sobre</Title>
                <AboutTextAndImageContainer>
                    <Box sx={{width: '45%'}}>
                        <AboutText>
                            A VFQ prestações de serviços elétricos é uma parceira confiável em soluções elétricas.
                            No mercado de prestação de serviços elétricos há mais de 30 anos,
                            oferecemos uma gama completa de serviços que abrangem desde inspeções a projetos até
                            instalações e manutenções, proporcionando serviços de confiança e alta qualidade.
                        </AboutText>
                    </Box>
                    <Img src={AboutImgSection} alt='Lâmpada' sx={{ 
                            width: '50%',
                            height: 'auto',
                        }} />
                </AboutTextAndImageContainer>
            </AboutContainer>
        </AboutSection>
    </>
)
