import { Grid } from "@mui/material";
import { useSelector } from "react-redux"
import ItemGrid from "../../Home/ItemGrid"

const Catalogue = () => {

    const products = useSelector(state => state.products.products);

    return (
        <Grid container>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={2}>
                    {products?.length ? (
                        products[0].all_products.map((item) => (
                            <ItemGrid key={item.id} item={item} />
                        ))
                    ) : (
                        <div>Loading...</div>
                    )}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Catalogue;