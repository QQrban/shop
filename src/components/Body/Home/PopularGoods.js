import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import TopTitle from './TopTitle';
import ItemGrid from './ItemGrid';
import en from '../../../locales/en';
import ee from '../../../locales/ee';
import ru from '../../../locales/ru';

const translations = {
    en,
    ee,
    ru,
};

const PopularGoods = () => {
    const language = useSelector(state => state.products.language);
    const products = useSelector((state) => state.products.products);
    const t = translations[language];

    return (
        <Box sx={{ mt: '60px' }}>
            <TopTitle name={t.main.section_titles.popular_goods} />
            <Grid sx={{ flexGrow: 1, mt: '50px' }} container>
                <Grid item xs={12}>
                    <Grid
                        container
                        justifyContent="center"
                        spacing={{ xl: 10, sm: 5, xs: 2 }}
                    >
                        {products?.length ? (
                            products[0].top_products.map((item) => (
                                <ItemGrid key={item.id} item={item} />
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

export default PopularGoods;
