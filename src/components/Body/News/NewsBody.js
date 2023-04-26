import { setNews } from '../../../services/stateService';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import MainNews from './MainNews';
import SecondaryNews from './SecondaryNews';
import Divider from '@mui/material/Divider';
import { useTranslation } from '../../../translate';


const NewsBody = () => {

    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();

    const language = useSelector((state) => state.products.language);
    const t = useTranslation(language);

    useEffect(() => {
        if (!products) return;
        dispatch(setNews(products[0].news));
    }, [dispatch, products]);

    return (
        <Box sx={{
            mt: 12
        }}>
            <Typography
                component='h4'
                sx={{
                    fontSize: 40,
                    fontWeight: 500,
                    color: 'rgb(31, 31, 90)'
                }}
            >
                {t.main.news.header}
            </Typography>
            <Box>
                <MainNews />
                <Divider sx={{ mt: 4 }} />
                <SecondaryNews />
            </Box>
        </Box>
    )
}

export default NewsBody;