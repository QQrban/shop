import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const chosenLang = {
    ENG: ['show all',],
    EE: ['näita kõiki'],
    RU: ['показать все'],
};

const TopTitle = ({ name }) => {
    const [selectedLang, setSelectedLang] = useState(chosenLang.ENG);
    const language = useSelector(state => state.products.language);

    const navigate = useNavigate();

    useEffect(() => {
        const onChoose = () => {
            for (const key in chosenLang) {
                if (language === key) {
                    setSelectedLang(chosenLang[key]);
                }
            }
        }
        onChoose();
    }, [language])

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
                {selectedLang}
            </Button>
        </Box>
    );
};

export default TopTitle;
