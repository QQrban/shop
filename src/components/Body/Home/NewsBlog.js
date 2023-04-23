import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Box, Paper, Typography, Grid } from '@mui/material';
import TopTitle from './TopTitle';
import en from '../../../locales/en';
import ee from '../../../locales/ee';
import ru from '../../../locales/ru';

const translations = {
    en,
    ee,
    ru,
};


const NewsBlog = () => {
    const language = useSelector(state => state.products.language);
    const products = useSelector((state) => state.products.products);
    const t = translations[language];


    return (
        <Box sx={{ mt: '60px' }}>
            <TopTitle name={t.main.section_titles.news_and_blog} />
            <Grid sx={{ flexGrow: 1, mt: '50px' }} container>
                <Grid item xs={12}>
                    <Grid
                        container
                        justifyContent="center"
                        spacing={{ xl: 10, sm: 5, xs: 2 }}
                    >
                        {products?.length ? (
                            products[0].news.slice(0, 4).map((item) => (
                                <Grid key={item.id} item>
                                    <Paper
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            width: 220,
                                            height: 250,
                                            borderRadius: '14px',
                                            overflow: 'hidden',
                                            textAlign: 'center',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                gap: '14px',
                                            }}
                                        >
                                            <img
                                                style={{ height: '147px' }}
                                                src={item.img}
                                                alt="electr"
                                            />
                                        </Box>
                                        <Typography
                                            sx={{
                                                fontSize: '15px',
                                                mt: '13px',
                                                fontWeight: 600,
                                                p: '0 4px',
                                            }}
                                            component="div"
                                        >
                                            {item.title}
                                        </Typography>
                                    </Paper>
                                </Grid>
                            ))
                        ) : (
                            <div>Loading...</div>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default NewsBlog;
