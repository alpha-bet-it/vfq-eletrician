import { StyledLink } from './menu'
import { AppBar, Box, List, ListItem, ListItemButton, ListItemText, Toolbar, IconButton, Divider, Button, Avatar, Typography } from '@mui/material'
import { AppBarItemsEnum } from '../../enums'
import { Image } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu';
import { Img } from '../Img';
import AppBarImage from '../../images/vilmar-fernandez-logo-original-PhotoRoom.png-PhotoRoom-300-120.png'
//onClick={handleDrawerToggle}

function Menu() {
    const boxShadowProps = {
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.1), 0px 4px 5px 0px rgba(0,0,0,0.1), 0px 1px 10px 0px rgba(0,0,0,0.1)'
    }
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <AppBar component={'div'} sx={{ ...boxShadowProps }}>
                    <Toolbar sx={{ padding: '20px' }}>
                        <Box sx={{ display: 'block', flexGrow: 1 }}>
                            <Img src={AppBarImage} alt='image' sx={{ maxWidth: '160px', maxHeight: '120px' }} />
                        </Box>
                        <Box sx={{ display: 'block', flexGrow: 1 }}>
                            <Button>
                                <Typography sx={{fontWeight: 800}}>
                                    (62) 9 9334-9288
                                </Typography>
                            </Button>
                        </Box>
                        <Box sx={{ display: { xl: 'block' } }}>
                            {AppBarItemsEnum.map((item) => (
                                <Button key={item}>
                                    <Typography sx={{fontWeight: 600}}>
                                        { item.toUpperCase() }
                                    </Typography>
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
