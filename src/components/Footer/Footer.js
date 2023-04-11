import { Container, Box, Typography } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Subscribe from "./Subscribe";


const Footer = () => {

    const styles = {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        mt: '16px',
        color: '#ffffffa2'
    }

    return (
        <footer>
            <Container sx={{
            }} >
                <Box sx={{
                    display: 'flex',
                    justifyContent: { xs: 'center', md: 'space-between' },
                    flexWrap: 'wrap',
                    gap: '40px',
                    pb: '20px',
                    borderBottom: '1px solid gray'
                }}>
                    <Box>
                        <Typography
                            variant="h4"
                            component='h4'
                            sx={{
                                fontWeight: 600,
                            }}
                        ><span style={{ color: 'orange' }}>React</span>Shop
                        </Typography>
                        <Typography sx={{ mt: '16px', maxWidth: 200, fontSize: 15 }} component='p'>Upgrade Your Tech, Unleash Your Possibilities!</Typography>
                        <Typography sx={{ mt: '16px' }} component='p'>Follow Us:</Typography>
                        <Box sx={{
                            mt: '9px',
                            display: 'flex',
                            gap: '14px'
                        }}>
                            <TwitterIcon />
                            <FacebookIcon />
                            <InstagramIcon />
                        </Box>
                    </Box>
                    <Box>
                        <Typography
                            variant="h5"
                            component='ul'
                        >
                            Products
                        </Typography>
                        <Box sx={styles}>
                            <Typography sx={{ fontSize: '16px' }} component='li'>Super Sale</Typography>
                            <Typography sx={{ fontSize: '16px' }} component='li'>Categories</Typography>
                            <Typography sx={{ fontSize: '16px' }} component='li'>Popular</Typography>
                            <Typography sx={{ fontSize: '16px' }} component='li'>New Goods</Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography
                            variant="h5"
                            component='ul'
                        >
                            Marketplace
                        </Typography>
                        <Box sx={styles}>
                            <Typography sx={{ fontSize: '16px' }} component='li'>About Us</Typography>
                            <Typography sx={{ fontSize: '16px' }} component='li'>Contacts</Typography>
                            <Typography sx={{ fontSize: '16px' }} component='li'>News and blog</Typography>
                            <Typography sx={{ fontSize: '16px' }} component='li'>Partners</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{
                    pb: '30px',
                    borderBottom: '1px solid gray'
                }}>
                    <Subscribe />
                </Box>

            </Container>
        </footer >
    )
}

export default Footer;