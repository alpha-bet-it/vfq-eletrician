import { StyledLink } from './menu'
import { AppBar, Box, List, ListItem, ListItemButton, ListItemText, Toolbar, IconButton, Divider, Button, Avatar } from '@mui/material'
import { AppBarItemsEnum } from '../../enums'
import { Image } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu';
import { Img } from '../Img';
//onClick={handleDrawerToggle}

function Menu() {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <AppBar component={'div'}>
                    <Toolbar>
                        <Box sx={{ display: 'block', flexGrow: 1 }}>
                            <Img src='../../images/vilmar-fernandez-icon-appbar-icon.png' alt='image' />
                        </Box>
                        <Box sx={{ display: { xl: 'block' } }}>
                            {AppBarItemsEnum.map((item) => (
                                <Button key={item} sx={{ color: '#000000' }}>
                                    { item.toUpperCase() }
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Menu
