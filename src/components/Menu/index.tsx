import { StyledLink } from './menu'
import { AppBar, Box, List, ListItem, ListItemButton, ListItemText, Toolbar, IconButton, Divider, Button, Avatar } from '@mui/material'
import { AppBarItemsEnum } from '../../enums'
//onClick={handleDrawerToggle} 
function Menu() {
    return (
        <>
            
            <Box sx={{ textAlign: 'center', display: 'flex' }}>
                <AppBar component={'div'}>
                    <Toolbar>
                        <Box sx={{ flexGrow: 1 }}>
                            <img src="../../" alt='Logo' />
                        </Box>
                        <Divider />
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
