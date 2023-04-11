import { Box, Paper, Typography, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import TopTitle from './TopTitle';

const NewsBlog = () => {
    const products = useSelector(state => state.products);
    console.log(products);

    return (
        <Box sx={{ mt: '80px' }}>
            <TopTitle name={'News and Blog'} />
            <Grid sx={{ flexGrow: 1, mt: '50px' }} container>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={10}>
                        {products?.length ? (
                            products[0].news.slice(0, 4).map((item) => (
                                <Grid key={item.id} item>
                                    <Paper
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            width: 220,
                                            height: 250,
                                            borderRadius: '14px',
                                            overflow: 'hidden',
                                            textAlign: 'center'
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                gap: '14px',
                                            }}
                                        >
                                            <img
                                                style={{ height: '147px' }}
                                                src={item.img}
                                                alt="electr"
                                            />
                                        </Box>
                                        <Typography sx={{
                                            fontSize: '15px',
                                            mt: '13px',
                                            fontWeight: 600,
                                            p: '0 4px'
                                        }}
                                            component='div'>
                                            {item.title}
                                        </Typography>
                                    </Paper>
                                </Grid>
                            ))
                        ) : (
                            <div>Loading...</div>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default NewsBlog;
