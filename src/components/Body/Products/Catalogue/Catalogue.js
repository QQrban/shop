import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import ItemGrid from "../../Home/ItemGrid";

const Catalogue = () => {

    const products = useSelector(state => state.products.products);
    const catalogue = useSelector(state => state.products.catalogue);

    return (
        <Grid container>
            <Grid item xs={12}>
                <Grid container justifyContent={{ md: 'flex-start', xs: 'center' }} spacing={2}>
                    {products?.length && catalogue?.length === 0 ? (
                        products[0].all_products.map((item) => (
                            <ItemGrid key={item.id} item={item} />
                        ))
                    ) : (
                        catalogue.map((item) => (
                            <ItemGrid key={item.id} item={item} />
                        ))
                    )}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Catalogue;