import { Box, Button, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const MainNews = () => {

    const news = useSelector(state => state.products.news);
    const language = useSelector((state) => state.products.language);

    if (!language) return;
    if (!news) return;

    return (
        <Box sx={{
            mt: 5,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'column', md: 'row' },
            gap: 5,
            justifyContent: 'center',

        }}>
            <img src={news[language][0].img} alt="main" />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: { xs: 1, sm: 1, md: 3 },
            }}>
                <Typography
                    variant='h5'
                    component='h6'
                    sx={{ fontSize: 24, fontWeight: 600, color: 'darkblue' }}
                >
                    {news[language][0].title}
                </Typography>
                <Typography
                    sx={{
                        mt: 2,
                        lineHeight: 1.6
                    }}
                    component='p'
                >
                    {news[language][0].description}
                </Typography>
                <Button
                    sx={{
                        p: 0,
                        mt: 2,
                        alignSelf: 'flex-start'
                    }}>
                    Learn more
                    <KeyboardDoubleArrowRightIcon sx={{ marginLeft: 1 }} />
                </Button>
            </Box>
        </Box>
    )
}

export default MainNews