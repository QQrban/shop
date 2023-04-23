import { useSelector } from 'react-redux';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import en from '../../../locales/en';
import ee from '../../../locales/ee';
import ru from '../../../locales/ru';

const translations = {
    en,
    ee,
    ru,
};

const TopTitle = ({ name }) => {
    const language = useSelector(state => state.products.language);
    const t = translations[language];

    const navigate = useNavigate();

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                p: '0 10px',
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    fontWeight: '500',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                }}
            >
                <div className="hot-category-subtl">{name}</div>
            </Typography>
            <Button
                onClick={() => navigate('/products')}
                sx={{
                    color: 'orange',
                    ':hover': {
                        backgroundColor: 'orange',
                        color: 'white',
                    },
                }}
            >
                {t.main.show_all}
            </Button>
        </Box>
    );
};

export default TopTitle;
