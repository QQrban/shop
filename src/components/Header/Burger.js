import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import en from '../../locales/en';
import ee from '../../locales/ee';
import ru from '../../locales/ru';

const translations = {
    en,
    ee,
    ru,
};


const chosenLang = {
    ENG: ['Home', 'Products', 'Services', 'News',],
    EE: ['Esileht', 'Tooted', 'Teenused', 'Uudised'],
    RU: ['Главная', 'Товары', 'Услуги', 'Новости'],
};


function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

function Burger() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [value, setValue] = useState(0);

    const navigate = useNavigate();

    const language = useSelector(state => state.products.language);
    const t = translations[language];

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleOpenNavMenu = (event, link) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static">
            <Container>
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <Link to='/'>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography
                                        textAlign="center"
                                    >
                                        {t.header.navigation.home}
                                    </Typography>
                                </MenuItem>
                            </Link>
                            <Link to='/products'>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography
                                        textAlign="center"
                                    >
                                        {t.header.navigation.products}
                                    </Typography>
                                </MenuItem>
                            </Link>
                            <Link to='/services'>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography
                                        textAlign="center"
                                    >
                                        {t.header.navigation.services}
                                    </Typography>
                                </MenuItem>
                            </Link>
                            <Link to='/news'>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography
                                        textAlign="center"
                                    >
                                        {t.header.navigation.news}
                                    </Typography>
                                </MenuItem>
                            </Link>
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="secondary"
                            textColor="inherit"
                            variant="fullWidth"
                        >
                            <Tab
                                onClick={() => navigate('/')}
                                label={t.header.navigation.home}
                                {...a11yProps(0)}
                            />
                            <Tab
                                onClick={() => navigate('/products')}
                                label={t.header.navigation.products}
                                {...a11yProps(1)}
                            />
                            <Tab label={t.header.navigation.services} {...a11yProps(2)} />
                            <Tab label={t.header.navigation.news} {...a11yProps(3)} />
                        </Tabs>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Burger;
