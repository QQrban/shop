import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '@mui/material'
import MainPoster from '../components/Body/Home/MainPoster';
import HotCategories from '../components/Body/Home/HotCategories';
import PopularGoods from '../components/Body/Home/PopularGoods';
import NewGoods from '../components/Body/Home/NewGoods';
import SuperSale from '../components/Body/Home/SuperSale';
import NewsBlog from '../components/Body/Home/NewsBlog';
import SecondaryPoster from '../components/Body/Home/SecondaryPoster';
import { getAllProducts } from '../services/apiService';
import { setProducts } from '../services/stateService';

const HomePage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        getAllProducts().then((data) => {
            dispatch(setProducts(data));
        });
    }, [dispatch]);

    return (
        <main>
            <Container>
                <MainPoster />
                <HotCategories />
                <PopularGoods />
                <NewGoods />
                <SecondaryPoster />
                <SuperSale />
                <NewsBlog />
            </Container>
        </main>
    )
}

export default HomePage;