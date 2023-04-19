import { Container } from '@mui/material';
import ProdCategories from '../components/Body/Products/ProdCategories';
import ProdBody from '../components/Body/Products/ProdBody';

const ProductsPage = () => {
    return (
        <main>
            <Container>
                <ProdCategories />
                <ProdBody />
            </Container>
        </main>
    );
};

export default ProductsPage;
