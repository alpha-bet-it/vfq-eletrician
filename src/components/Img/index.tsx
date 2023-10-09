import { Box, BoxProps } from '@mui/material'

type BoxImageProps = {
    src?: string
    alt: string
}

export const Img = (props: BoxProps & BoxImageProps) => <Box component='img' { ...props } />
