import { useDispatch } from 'react-redux';
import { Box, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { getPopular } from '../../../services/apiService';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { addProduct } from '../../../services/stateService';

const ItemGrid = () => {

    const onClickAdd = (item) => {
        const obj = {
            id: item.id,
            name: item.name,
            img: item.img,
            price: item.price,
        };
        dispatch(addProduct(obj));
    };


    return (
        <Grid key={item.id} item>
            <Paper
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: 220,
                    borderRadius: '14px',
                    p: '5px 10px',
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
                        style={{ maxWidth: '100px' }}
                        src={item.img}
                        alt="electr"
                    />
                    <Typography
                        sx={{
                            textAlign: 'center',
                            fontWeight: 500,
                            height: 72,
                        }}
                    >
                        {item.name}
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Typography sx={{ fontWeight: 500, fontSize: '19px' }}>
                            ${item.price}
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                            }}
                        >
                            <Typography
                                onClick={(e) => like(e)}
                                component="div"
                                className="like"
                                sx={{
                                    p: '4px 10px',
                                    border: '1px solid #8080801e',
                                    cursor: 'pointer',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <FavoriteBorderIcon
                                    className="like-btn"
                                    sx={{ pointerEvents: 'none' }}
                                />
                            </Typography>
                            <Button
                                onClick={() => onClickAdd(item)}
                                sx={{
                                    borderRadius: '12px',
                                }}
                                variant="contained"
                            >
                                Buy
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </Grid>
    )
}

export default ItemGrid