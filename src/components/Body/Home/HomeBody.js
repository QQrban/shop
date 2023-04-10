import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '@mui/material'
import MainPoster from './MainPoster';
import HotCategories from './HotCategories';
import PopularGoods from './PopularGoods';
import NewGoods from './NewGoods';
import { getAllProducts } from '../../../services/apiService';
import { setProducts } from '../../../services/stateService';
import SecondaryPoster from './SecondaryPoster';
import SuperSale from './SuperSale';

const HomeBody = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        getAllProducts().then((data) => {
            dispatch(setProducts(data));
        });
    }, [dispatch]);

    return (
        <main style={{ paddingTop: '50px' }}>
            <Container>
                <MainPoster />
                <HotCategories />
                <PopularGoods />
                <NewGoods />
                <SecondaryPoster />
                <SuperSale />
            </Container>
        </main>
    )
}

export default HomeBody;