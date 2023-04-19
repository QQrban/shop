import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import ItemGrid from '../../Home/ItemGrid';

const Catalogue = () => {
    const catalogue = useSelector((state) => state.catalogue.catalogue);
    const filtered = useSelector((state) => state.catalogue.filteredItems);
    return (
        <Grid container>
            <Grid item xs={12}>
                <Grid
                    container
                    justifyContent={{ md: 'flex-start', xs: 'center' }}
                    spacing={2}
                >
                    {catalogue?.length && filtered.length === 0
                        ? catalogue.map((item) => <ItemGrid key={item.id} item={item} />)
                        : filtered.map((item) => <ItemGrid key={item.id} item={item} />)}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Catalogue;
