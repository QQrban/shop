import { useSelector } from "react-redux";
import { Box, Paper, Container, Typography } from "@mui/material"
import { useTranslation } from '../../../translate';
import img from '../../../img3.png';

const ServicesBanner = () => {

    const language = useSelector((state) => state.products.language);
    const t = useTranslation(language);

    return (
        <Paper sx={{
            mt: { xs: 12, sm: 14 },
            padding: { xs: 3, sm: 5 },
            bgcolor: '#1976d224',
        }}>
            <Container>
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: { xs: 3, sm: 4, md: 5 },
                }}>
                    <Box>
                        <Typography
                            variant='h4'
                            component='h2'
                            sx={{
                                color: 'orange',
                                fontWeight: 500,
                            }}
                        >
                            {t.main.services.banner.title}
                        </Typography>
                        <Typography
                            sx={{
                                mt: { xs: 2, sm: 4, md: 5 },
                                maxWidth: 650,
                                fontSize: { sm: 23, md: 30 },
                                color: 'black',
                            }}
                            component='p'
                        >
                            <span style={{
                                fontSize: 34,
                                fontWeight: 700
                            }}
                            >
                                {t.main.services.banner.big_text}
                            </span>
                            {t.main.services.banner.text}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            width: 250,
                        }}>
                        {/* <RecyclingIcon sx={{ fontSize: { xs: 100, sm: 120, md: 140 }, color: 'white' }} /> */}
                        <img src={img} alt="" />
                    </Box>
                </Box>
            </Container>
        </Paper>
    )
}

export default ServicesBanner