import { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material"
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { getPopular } from "../../services/apiService";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const PopularGoods = () => {
    const [popular, setPopular] = useState(null);

    useEffect(() => {
        getPopular()
            .then(data => {
                setPopular(data.popular_goods)
            })
    }, [])

    const like = (e) => {
        e.target.classList.toggle('make-orange');
        e.target.children[0].classList.toggle('make-white')
    }

    return (
        <Box sx={{ mt: '100px' }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                p: '0 10px'
            }}>
                <Typography
                    variant='h5'
                    sx={{
                        fontWeight: '500',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px'
                    }}
                >
                    <div className='hot-category-subtl'>Popular Goods</div>
                </Typography>
                <Button sx={{
                    color: 'orange',
                    ':hover': {
                        backgroundColor: 'orange',
                        color: 'white'
                    }
                }}>Show all</Button>
            </Box>
            <Grid sx={{ flexGrow: 1, mt: '50px' }} container>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={10}>
                        {popular?.length ? popular.map(item => (
                            <Grid key={item.id} item>
                                <Paper
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        width: 220,
                                        borderRadius: '14px',
                                        p: '5px 10px'

                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            gap: '14px',
                                        }}>
                                        <img style={{ maxWidth: '100px' }} src={item.img} alt="" />
                                        <Typography
                                            sx={{
                                                textAlign: 'center',
                                                fontWeight: 500,
                                                height: 72,

                                            }}
                                        >
                                            {item.name}
                                        </Typography>
                                        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Typography sx={{ fontWeight: 500, fontSize: '19px' }}>${item.price}</Typography>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px',
                                                }}
                                            >
                                                <Typography
                                                    onClick={(e) => like(e)}
                                                    component='div'
                                                    className="like"
                                                    sx={{
                                                        p: '4px 10px',
                                                        border: '1px solid #8080801e',
                                                        cursor: 'pointer',
                                                        borderRadius: '12px',
                                                        display: 'flex',
                                                        alignItems: 'center'
                                                    }}>
                                                    <FavoriteBorderIcon className="like-btn" sx={{ pointerEvents: 'none' }} />
                                                </Typography>
                                                <Button
                                                    sx={{
                                                        borderRadius: '12px'
                                                    }}
                                                    variant="contained" >
                                                    Buy
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Paper>
                            </Grid>
                        )) : <div>Loading...</div>}
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                </Grid>
            </Grid>
        </Box >
    )
}

export default PopularGoods