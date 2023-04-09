import { Container } from '@mui/material'
import MainPoster from './MainPoster';
import HotCategories from './HotCategories';
import PopularGoods from './PopularGoods';


const Body = () => {
    return (
        <main style={{ paddingTop: '50px' }}>
            <Container>
                <MainPoster />
                <HotCategories />
                <PopularGoods />
            </Container>
        </main>
    )
}

export default Body