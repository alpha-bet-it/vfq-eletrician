import { Typography } from '@mui/material'

interface TitleProps {
  children: string
  fontSize?: string
  color?: string
  variant?: string
}

export const Title = ({ children, fontSize, color, variant }: TitleProps) => {
  return (
    <>
      <Typography
        variant='h2'
        component='h2'
        sx={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: fontSize ?? 'var(--h2-font-size)',
          fontWeight: 700,
          display: 'block',
          maxWidth: '80%',
          color: color ?? 'var(--main-color-dark)',
        }}
      >
        {children}
      </Typography>
    </>
  )
}
