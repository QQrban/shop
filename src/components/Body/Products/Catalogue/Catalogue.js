import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import ItemGrid from '../../Home/ItemGrid';

const Catalogue = () => {
    const filtered = useSelector((state) => state.catalogue.filteredItems);

    if (!filtered) return;
    return (
        <Grid container>
            <Grid item xs={12}>
                <Grid
                    container
                    justifyContent={{ md: 'flex-start', xs: 'center' }}
                    spacing={2}
                >
                    {filtered?.length
                        ? filtered.map((item) => <ItemGrid key={item.id} item={item} />)
                        : <div>No suitable products</div>}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Catalogue;
