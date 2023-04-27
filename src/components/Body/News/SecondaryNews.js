import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

function SecondaryNews() {

    const news = useSelector(state => state.products.news);
    const language = useSelector((state) => state.products.language);

    if (!language) return;
    if (!news) return;

    return (
        <Box sx={{ flexGrow: 1, mt: 5 }}>
            <Grid container spacing={3}>
                {news ? news[language].slice(1).map(item => (
                    <Grid sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: { xs: 'center', sm: 'flex-start' },
                        textAlign: { xs: 'center', sm: 'left' },
                        gap: 2,
                    }}
                        key={item.id}
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={6}
                    >
                        <Box sx={{
                            width: { xs: '100%', sm: 240 },
                            flexShrink: 0,
                            overflow: 'hidden'
                        }}>
                            <img src={item.img} alt="news" />
                        </Box>
                        <Box sx={{
                            maxWidth: 650,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-around'
                        }}>
                            <Typography
                                sx={{
                                    fontSize: 16,
                                    mb: 2,
                                    color: 'darkblue',
                                }}
                                variant='h5'
                            >
                                {item.title}
                            </Typography>
                            <Typography
                                sx={language === 'ru' ? { fontSize: 12, lineHeight: { xs: '20px !important  ', sm: 1.4 } } : { fontSize: 14 }}
                                variant='p'
                            >
                                {language === 'ru' ? item.description.split('.')[0] : item.description}
                            </Typography>
                        </Box>
                    </Grid>
                )) : <div>no info</div>}


            </Grid>
        </Box>
    );
}

export default SecondaryNews;