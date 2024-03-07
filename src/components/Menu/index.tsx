import { useState } from 'react'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import {
    Box,
    Toolbar,
    Button,
    Typography,
    Drawer,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText
} from '@mui/material'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { AppBarItemsEnum } from '../../constants/menu'
import { Img } from '../Img'
import AppBarImage from '../../images/vfq-logo.png'
import { StyledAppBar } from './styles'

const WHATS_APP_MESSAGE = 'Olá VFQ, gostaria de um orçamento!'

function Menu () {
    const [mobileOpen, setMobileOpen] = useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState)
    }

    const handleWhatsAppMessage = () => {
        window.open(`https://wa.me/5562998070467?text=${WHATS_APP_MESSAGE.replace(/^\b/g, '+')}`, '_blank')
    }

    const drawer =  (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                VF-E
            </Typography>
            <Divider />
            <List>
                {AppBarItemsEnum.map((item) => (
                    <ListItem key={item} disablePadding  onClick={item === 'orçamento' ? handleWhatsAppMessage : undefined}>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.toUpperCase()} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
    return (
        <>
            <Box sx={{ display: 'flex', margin: 0, padding: 0 }}>
                <StyledAppBar>
                    <Box sx={{ backgroundColor: 'var(--main-color)', color: 'var(--light-color)', display: 'flex', justifyContent: 'space-around' }}>
                        <Box sx={{ maxWidth: '80%', width: '100%', display: 'flex', justifyContent: 'end' }}>
                            <Box sx={{ display: 'flex', padding: '10px 0' }}>
                                <Button sx={{
                                        ':hover': {
                                            boxShadow: `
                                                0px 4px 5px -3px rgba(0,0,0,0.1),
                                                0px 6px 7px 0px rgba(0,0,0,0.1),
                                                0px 2px 12px 0px rgba(0,0,0,0.1);
                                            `,
                                            backgroundColor: 'var(--light-color)',
                                            color: 'var(--main-color-dark)'
                                        },
                                        backgroundColor: 'var(--light-color)',
                                        color: 'var(--main-color)',
                                    }} onClick={handleWhatsAppMessage}>
                                    <AiOutlineWhatsApp fontSize={'1.5rem'} />
                                    <Typography>
                                        (62) 9 9807-0467
                                    </Typography>
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                    <Toolbar sx={{ padding: '20px 0', justifyContent: { sm: 'start', md: 'space-around' }, backgroundColor: 'var(--light-color)' }} disableGutters>
                        <IconButton
                            color='secondary'
                            sx={{ mr: 2, display: { md: 'none', xs: 'block' } }}
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box component={'div'} sx={{ maxWidth: '80%', display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                            <Box sx={{ display: 'block' }}>
                                <Img src={AppBarImage} alt='image' sx={{ maxWidth: '120px', maxHeight: '120px' }} />
                            </Box>
                            <Box>
                                {AppBarItemsEnum.map((item) => (
                                    <Button key={item} sx={{ ":last-child": { paddingRight: 0 }, ':hover': { backgroundColor: 'transparent' } }} href={`#${item}`} onClick={item === 'orçamento' ? handleWhatsAppMessage : undefined}>
                                        <Typography sx={{ fontSize: '1rem', fontWeight: 500, letterSpacing: '0.03rem', ':hover': { color: '#2C698C' }, color: '#0F232F' }}>
                                            {item.toUpperCase()}
                                        </Typography>
                                    </Button>
                                ))}
                            </Box>
                        </Box>
                    </Toolbar>
                </StyledAppBar>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '65%' },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </>
    )
}

export default Menu
