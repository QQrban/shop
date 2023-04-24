import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import ItemGrid from '../../Home/ItemGrid';
import { useTranslation } from '../../../../translate';

const Catalogue = () => {
    const filtered = useSelector((state) => state.catalogue.filteredItems);

    const language = useSelector(state => state.products.language);
    const t = useTranslation(language);

    if (!filtered) return;
    return (
        <Grid container>
            <Grid item xs={12}>
                <Grid
                    container
                    justifyContent={{ md: 'flex-start', xs: 'center', position: 'relative' }}
                    spacing={2}
                >
                    {filtered?.length
                        ? filtered.map((item) => <ItemGrid key={item.id} item={item} />)
                        : <Typography sx={{
                            fontSize: 40,
                            m: '20px 0 0 20px'
                        }}
                        >
                            {t.main.products.no_products}
                        </Typography>}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Catalogue;
