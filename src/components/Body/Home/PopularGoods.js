import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';

import TopTitle from './TopTitle';
import ItemGrid from './ItemGrid';

const PopularGoods = () => {
    const products = useSelector((state) => state.products.products);

    return (
        <Box sx={{ mt: '60px' }}>
            <TopTitle name={'Popular Goods'} />
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
