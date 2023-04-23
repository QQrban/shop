import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import img from '../../../img2.png';
import en from '../../../locales/en';
import ee from '../../../locales/ee';
import ru from '../../../locales/ru';

const translations = {
    en,
    ee,
    ru,
};

const SecondaryPoster = () => {

    const language = useSelector(state => state.products.language);
    const t = translations[language];

    return (
        <Box
            sx={{
                mt: '90px',
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    width: '100%',
                },
            }}
        >
            <Paper
                className="poster"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '20px 30px',
                    justifyContent: 'space-around',
                    borderRadius: '10px',
                    gap: '40px',
                    bgcolor: '#1976d224',
                }}
                elevation={3}
            >
                <img style={{ maxWidth: '350px' }} src={img} alt="" />
                <Box
                    sx={{
                        maxWidth: '490px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: '42px',
                            fontWeight: 'bold',
                        }}
                    >
                        {t.main.secondary_poster.title}
                        <span style={{ color: 'orange' }}> {t.main.secondary_poster.styled_title}</span>
                    </Typography>
                    <Typography
                        variant="p"
                        sx={{
                            fontSize: '17px',
                            lineHeight: '24px',
                        }}
                    >
                        {t.main.secondary_poster.text}
                    </Typography>
                    <Button
                        className="shop-now"
                        sx={{
                            maxWidth: '150px',
                            bgcolor: 'orange',
                        }}
                        variant="contained"
                    >
                        {t.main.secondary_poster.button}
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default SecondaryPoster;
