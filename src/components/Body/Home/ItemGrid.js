import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { addItem } from '../../../services/cartSlice';

const chosenLang = {
    ENG: ['buy',],
    EE: ['osta'],
    RU: ['купить'],
};

const ItemGrid = ({ item }) => {
    const [selectedLang, setSelectedLang] = useState(chosenLang.ENG);
    const language = useSelector(state => state.products.language);

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);
    const price = useSelector((state) => state.cart.totalPrice);

    const onClickAdd = (item) => {
        const obj = {
            id: item.id,
            name: item.name,
            img: item.img,
            price: item.price,
        };
        dispatch(addItem(obj));
    };

    const like = (e) => {
        e.target.classList.toggle('make-orange');
        e.target.children[0].classList.toggle('make-white');
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('price', JSON.stringify(price));
    }, [cart, price]);

    useEffect(() => {
        const onChoose = () => {
            for (const key in chosenLang) {
                if (language === key) {
                    setSelectedLang(chosenLang[key]);
                }
            }
        }
        onChoose();
    }, [language])

    return (
        <Grid item>
            <Paper
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: 220,
                    height: 250,
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
                        style={{ width: '100px', height: '100px' }}
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
                        <Typography
                            sx={{ fontWeight: 500, fontSize: '19px', position: 'relative' }}
                        >
                            ${item.price}
                            <Typography
                                sx={{
                                    position: 'absolute',
                                    top: '-15px',
                                    color: 'orange',
                                    textDecoration: 'line-through',
                                    fontSize: '14px',
                                }}
                                component="span"
                            >
                                {item.discount}
                            </Typography>
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
                                {selectedLang}
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </Grid>
    );
};

export default ItemGrid;
