import { useEffect, useState } from 'react'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import {
    AppBar,
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
import AppBarImage from '../../images/vilmar-fernandez-logo-original-PhotoRoom.png-PhotoRoom-300-120.png'
import { StyledAppBar } from './styles'

function Menu () {
    const [mobileOpen, setMobileOpen] = useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState)
    }

    const drawer =  (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                VF-E
            </Typography>
            <Divider />
            <List>
                {AppBarItemsEnum.map((item) => (
                    <ListItem key={item} disablePadding>
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
                    <Box sx={{ backgroundColor: '#153243', color: '#E6EBE0', display: 'flex', justifyContent: 'space-around' }}>
                        <Box sx={{ maxWidth: '80%', width: '100%', display: 'flex', justifyContent: 'end' }}>
                            <Box sx={{ display: 'flex', padding: '10px 0' }}>
                                <AiOutlineWhatsApp fontSize={'1.5rem'} />
                                <Typography sx={{ fontSize: '1rem', fontWeight: 500, paddingLeft: '5px' }}>
                                    (62) 9 9334-9288
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Toolbar sx={{ padding: '20px 0', justifyContent: { sm: 'start', md: 'space-around' } }} disableGutters>
                        <IconButton
                            color='secondary'
                            sx={{ mr: 2, display: { md: 'none', xs: 'block' } }}
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box component={'div'} sx={{ maxWidth: '80%', display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                            <Box sx={{ display: 'block' }}>
                                <Img src={AppBarImage} alt='image' sx={{ maxWidth: '160px', maxHeight: '120px' }} />
                            </Box>
                            <Box>
                                {AppBarItemsEnum.map((item) => (
                                    <Button key={item} sx={{ ":last-child": { paddingRight: 0 }, ':hover': { backgroundColor: 'transparent' } }}>
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
