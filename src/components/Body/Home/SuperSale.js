import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import TopTitle from './TopTitle';
import ItemGrid from './ItemGrid';

const chosenLang = {
    ENG: ['Super Sale',],
    EE: ['Mega Müük'],
    RU: ['Супер Скидка'],
};

const SuperSale = () => {
    const [selectedLang, setSelectedLang] = useState(chosenLang.ENG);
    const language = useSelector(state => state.products.language);
    const products = useSelector((state) => state.products.products);

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
        <Box sx={{ mt: '80px' }}>
            <TopTitle name={selectedLang} />
            <Grid sx={{ flexGrow: 1, mt: '50px' }} container>
                <Grid item xs={12}>
                    <Grid
                        container
                        justifyContent="center"
                        spacing={{ xl: 10, sm: 5, xs: 2 }}
                    >
                        {products?.length ? (
                            products[0].discount.map((item) => (
                                <ItemGrid key={item.id} item={item} />
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

export default SuperSale;
