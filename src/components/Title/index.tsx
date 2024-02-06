import { Typography } from '@mui/material'

interface TitleProps {
  children: string
}

export const Title = ({ children }: TitleProps) => {
  return (
    <>
      <Typography
        variant='h2'
        component='h2'
        sx={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: 'var(--h2-font-size)',
          fontWeight: 700,
          display: 'block',
          maxWidth: '80%',
          color: '#0F232F'
        }}
      >
        {children}
      </Typography>
    </>
  )
}
