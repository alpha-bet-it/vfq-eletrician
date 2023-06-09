import { Container } from '@mui/material'
import { Img } from '../Img'
import { CarouselContainer } from './styled'
import zIndex from '@mui/material/styles/zIndex'

const images = [
    'https://i.redd.it/1m01yqoae5l51.png',
    'https://i.imgur.com/PA7N7H5.jpeg',
    'https://wallpapercave.com/wp/wp4939880.png',
    'https://i.imgur.com/bDCjTEs.jpeg'
]

export function Carousel() {
    return (
        <>
            <CarouselContainer >
                {images.map(image => {
                    console.log(image)
                    return (<Img src={image} alt='img' key={image} sx={{ maxWidth: '100%', height: '100%', overflowClipMargin: 'content-box', overflow: 'clip', aspectRatio: 1920/770 }}/>)
                })}
            </CarouselContainer>
        </>
    )
}
