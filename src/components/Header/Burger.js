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
    const [selectedLang, setSelectedLang] = useState(chosenLang.ENG)

    const language = useSelector(state => state.products.language)
    const navigate = useNavigate();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const navigation = (link) => {
        window.scrollTo(0, 0);
        if (link === '/tooted' || link === '/товары') {
            return navigate('/products');
        } else if (link === '/teenused' || link === '/услуги') {
            return navigate('/services');
        } else if (link === '/uudised' || link === '/новости') {
            return navigate('/news');
        } else if (link === '/esileht' || link === '/главная') {
            return navigate('/');
        }
        else {
            navigate(link);
        }
    };

    useEffect(() => {
        const onChoose = () => {
            for (const key in chosenLang) {
                if (language === key) {
                    setSelectedLang(chosenLang[key]);
                }
            }
        }
        onChoose()
    }, [language])

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
                            {selectedLang.map((link) => (
                                <MenuItem key={link} onClick={handleCloseNavMenu}>
                                    <Typography
                                        onClick={() => navigation(`/${link.toLowerCase()}`)}
                                        textAlign="center"
                                    >
                                        {link}
                                    </Typography>
                                </MenuItem>
                            ))}
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
                                onClick={() => navigation('/')}
                                label={selectedLang[0]}
                                {...a11yProps(0)}
                            />
                            <Tab
                                onClick={() => navigation('/products')}
                                label={selectedLang[1]}
                                {...a11yProps(1)}
                            />
                            <Tab label={selectedLang[2]} {...a11yProps(2)} />
                            <Tab label={selectedLang[3]} {...a11yProps(3)} />
                        </Tabs>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Burger;
