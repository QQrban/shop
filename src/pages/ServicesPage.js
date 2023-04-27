import { Container } from '@mui/material';
import ServicesBody from '../components/Body/Servicess/ServicesBody';
import ServicesBanner from '../components/Body/Servicess/ServicesBanner';

const ServicesPage = () => {
    return (
        <main>
            <ServicesBanner />
            <Container>
                <ServicesBody />
            </Container>
        </main>
    )
}

export default ServicesPage