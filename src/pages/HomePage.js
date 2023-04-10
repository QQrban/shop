import { Container } from '@mui/material'
import MainPoster from '../components/Body/Home/MainPoster';
import HotCategories from '../components/Body/Home/HotCategories';
import PopularGoods from '../components/Body/Home/PopularGoods';
import NewGoods from '../components/Body/Home/NewGoods';

const HomePage = () => {
    return (
        <main style={{ paddingTop: '50px' }}>
            <Container>
                <MainPoster />
                <HotCategories />
                <PopularGoods />
                <NewGoods />
            </Container>
        </main>
    )
}

export default HomePage;