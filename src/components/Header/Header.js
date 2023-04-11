import * as React from 'react';
import { useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Container } from '@mui/material';
import ChooseLang from './ChooseLang';
import Burger from './Burger';

export default function Header() {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const cart = useSelector(state => state.cart)

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };


    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={cart.length} color="error">
                        <ShoppingBasketIcon />
                    </Badge>
                </IconButton>
                <p>Cart</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <FavoriteBorderIcon />
                </IconButton>
                <p>Wishes</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box position='fixed' sx={{ flexGrow: 1, width: '100%', zIndex: '55' }}>
            <AppBar position="static" >
                <Container>
                    <Toolbar >
                        <a href="/">
                            <Typography
                                variant="h4"
                                noWrap
                                component="div"
                                sx={{
                                    display: { xs: 'none', md: 'block', fontWeight: '600', marginRight: '10px' }
                                }}
                            >
                                React
                                <span style={{ color: 'orange' }}>Shop</span>
                            </Typography>
                        </a>
                        <ChooseLang />
                        <Box sx={{ flexGrow: 1 }} />
                        <a href="/">
                            <Typography
                                variant="h5"
                                noWrap
                                component="div"
                                sx={{
                                    display: { sm: 'block', md: 'none', fontWeight: '600' }
                                }}
                            >
                                React
                                <span style={{ color: 'orange' }}>Shop</span>
                            </Typography>
                        </a>
                        <Box sx={{ flexGrow: 1 }} />

                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <FavoriteBorderIcon fontSize='inherit' />
                            </IconButton>
                            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={cart.length} color="error">
                                    <ShoppingBasketIcon fontSize='inherit' />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <AccountCircle fontSize='inherit' />
                            </IconButton>

                        </Box>

                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
            {renderMobileMenu}
            <Burger />
        </Box>
    );
}