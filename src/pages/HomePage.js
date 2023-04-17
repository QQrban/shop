import { Container } from '@mui/material'
import MainPoster from '../components/Body/Home/MainPoster';
import PopularGoods from '../components/Body/Home/PopularGoods';
import NewGoods from '../components/Body/Home/NewGoods';
import SuperSale from '../components/Body/Home/SuperSale';
import NewsBlog from '../components/Body/Home/NewsBlog';
import SecondaryPoster from '../components/Body/Home/SecondaryPoster';


const HomePage = () => {



    return (
        <main>
            <Container>
                <MainPoster />
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