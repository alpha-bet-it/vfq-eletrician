import { Img } from '../Img'
import { ButtonsContainer, CarouselContainer, CarouselIndicatorContainer, ChevronBtn, Indicator, IndicatorsContainer } from './styles'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import { useSliderNavigation } from '../../hooks/useSliderNavigation'

const images = [
    'https://i.redd.it/1m01yqoae5l51.png',
    'https://i.imgur.com/PA7N7H5.jpeg',
    'https://wallpapercave.com/wp/wp4939880.png',
    'https://i.imgur.com/bDCjTEs.jpeg'
]

export function Carousel() {
    const { prev, next, current } = useSliderNavigation(images)

    return (
        <>
            <CarouselContainer >
                {images.map((image, index) => (<Img
                                src={image}
                                alt='img'
                                key={`carousel-item-${index}`}
                                sx={{ 
                                    maxWidth: '100%',
                                    height: '100%',
                                    overflowClipMargin: 'content-box',
                                    overflow: 'clip', aspectRatio: 1920/830,
                                }}
                                style={{
                                    transform: `translateX(-${current * 100}%)`,
                                    transition: 'transform ease-out 500ms',
                                }}
                            />))}
                <ButtonsContainer>
                    <ChevronBtn onClick={prev}>
                        <ChevronLeft sx={{ fontSize: '2rem', color: '#2C698C' }}/>
                    </ChevronBtn>
                    <ChevronBtn onClick={next}>
                        <ChevronRight sx={{ fontSize: '2rem', color: '#2C698C' }}/>
                    </ChevronBtn>
                </ButtonsContainer>
                <CarouselIndicatorContainer>
                    <IndicatorsContainer>
                        {images.map((_, index) => {
                            return (
                                <Indicator active={index === current ? true : false} />
                            )
                        })}
                    </IndicatorsContainer>
                </CarouselIndicatorContainer>
            </CarouselContainer>
        </>
    )
}
