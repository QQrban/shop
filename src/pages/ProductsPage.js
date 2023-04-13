import { Container, Typography } from '@mui/material'
import Categories from '../components/Body/Products/Categories'

const ProductsPage = () => {
    return (
        <main>
            <Container>
                <Typography
                    variant='h2'
                    component='h1'
                    sx={{
                        mt: '140px',
                        fontWeight: 500,
                        fontSize: 45,
                    }}
                >Categories</Typography>
                <Categories />
            </Container>
        </main>
    )
}

export default ProductsPage