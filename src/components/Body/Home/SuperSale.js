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

const SuperSale = () => {
    const language = useSelector(state => state.products.language);
    const t = translations[language];

    const products = useSelector((state) => state.products.products);

    return (
        <Box sx={{ mt: '80px' }}>
            <TopTitle name={t.main.section_titles.super_sale} />
            <Grid sx={{ flexGrow: 1, mt: '50px' }} container>
                <Grid item xs={12}>
                    <Grid
                        container
                        justifyContent="center"
                        spacing={{ xl: 10, sm: 5, xs: 2 }}
                    >
                        {products?.length ? (
                            products[0].discount.map((item) => (
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

export default SuperSale;
