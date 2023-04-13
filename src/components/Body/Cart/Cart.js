import { useEffect } from 'react';
import { Drawer, Box, Typography, Container, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { setOpenCart } from '../../../services/stateService';
import { plusItem, minusItem, removeItem, calculateTotals } from '../../../services/cartSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const styleIcon = {
    fontSize: 20,
    color: 'white',
    bgcolor: 'orange',
    borderRadius: '50%',
    cursor: 'pointer',
}

const Cart = () => {
    const dispatch = useDispatch();
    const openCart = useSelector(state => state.products.openCart);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const cart = useSelector(state => state.cart.cart);

    useEffect(() => {
        dispatch(calculateTotals(cart))
    }, [cart, dispatch])

    return (
        <Drawer anchor='bottom' open={openCart} onClose={() => dispatch(setOpenCart(false))}>
            <Box p={2} sx={{
                height: 550,
                overflowY: 'scroll'
            }}>
                <Container sx={{ pt: '20px' }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography
                            variant='h3'
                            component='h2'
                            sx={{
                                fontWeight: 600
                            }}
                        >
                            Checkout
                        </Typography>
                        <Typography>
                            {totalPrice}
                        </Typography>
                        <Grid container sx={{ gap: 4, mt: 5 }}>
                            {cart.length ? cart.map(item => (
                                <Grid key={item.id} item xs={12}>
                                    <Item className='cart-item' sx={{
                                        display: 'flex',
                                        flexDirection: { xs: 'column', sm: 'row' },
                                        gap: 2,
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}>
                                        <Box sx={{
                                            display: 'flex',
                                            gap: { sm: 3, xs: 1 },
                                            alignItems: 'center',
                                        }}>
                                            <img style={{ maxWidth: '70px' }} src={item.img} alt="cart-item" />
                                            <Typography
                                                sx={{
                                                    color: 'black',
                                                    maxWidth: 120,
                                                    fontSize: 16,
                                                    fontWeight: 500
                                                }}
                                                component='p'>
                                                {item.name.split(',')[0] + ('...')}
                                            </Typography>
                                        </Box>
                                        <Box sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            gap: { xs: 0, sm: 6, md: 21 },
                                            width: { lg: 600, md: 550, sm: 300, xs: 220 }

                                        }}>
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '4px',
                                            }}>
                                                <RemoveIcon sx={styleIcon} onClick={() => dispatch(minusItem(item))} />
                                                <Typography sx={{ fontWeight: 500, fontSize: 21, width: 30 }} color='primary' component='p'>{item.count}</Typography>
                                                <AddIcon sx={styleIcon} onClick={() => dispatch(plusItem(item))} />
                                            </Box>
                                            <Box>
                                                <Typography sx={{ fontWeight: 500, color: 'black', fontSize: 21 }} component='p'>$ {item.price * item.count}</Typography>
                                            </Box>
                                            <DeleteIcon sx={{ cursor: 'pointer', fontSize: 35 }} onClick={() => dispatch(removeItem(item))} />
                                        </Box>
                                    </Item>

                                </Grid>
                            )) :
                                <Typography
                                    variant='h2'
                                    component='div'
                                    sx={{
                                        fontWeight: 400,
                                        color: 'orange'
                                    }}
                                >
                                    Your cart is empty!
                                </Typography>
                            }

                        </Grid>
                    </Box>

                </Container>
            </Box >
        </Drawer >
    )
}

export default Cart