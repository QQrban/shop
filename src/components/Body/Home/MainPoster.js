import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import img from '../../../img1.png';

const chosenLang = {
    ENG: {
        title: `Online store with products from `,
        styled_title: 'Apple to Xiaomi',
        text: 'Visit us today and discover the best deals on electronic appliances in town!',
        button: 'shop now'
    },
    EE: {
        title: `Internetipood kus on tooteid `,
        styled_title: `Apple'ist Xiaomi'ni`,
        text: 'Külastage meid ja avastage linna parimad pakkumised elektroonikaseadmetele!',
        button: 'osta kohe'
    },
    RU: {
        title: `Интернет-магазин с продукцией от `,
        styled_title: `Apple до Xiaomi`,
        text: 'Заходите к нам и откройте для себя лучшие предложения на электронные устройства в городе!',
        button: 'К покупкам'
    },
}


const MainPoster = () => {
    const [selectedLang, setSelectedLang] = useState(chosenLang.ENG);

    const language = useSelector(state => state.products.language);

    useEffect(() => {
        const onChoose = () => {
            for (const key in chosenLang) {
                if (language === key) {
                    setSelectedLang(chosenLang[key]);
                }
            }
        }
        onChoose()
    }, [language])


    return (
        <Box
            sx={{
                mt: '140px',
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    width: '100%',
                },
            }}
        >
            <Paper
                className="poster"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '20px 30px',
                    justifyContent: 'space-around',
                    borderRadius: '10px',
                    gap: '40px',
                    bgcolor: '#ffa6004b',
                }}
                elevation={3}
            >
                <Box
                    sx={{
                        maxWidth: '490px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: '42px',
                            fontWeight: 'bold',
                        }}
                    >
                        {selectedLang.title}
                        <span style={{ color: '#1976d2' }}> {selectedLang.styled_title}</span>
                    </Typography>
                    <Typography
                        variant="p"
                        sx={{
                            fontSize: '17px',
                            lineHeight: '24px',
                        }}
                    >
                        {selectedLang.text}
                    </Typography>
                    <Button
                        className="shop-now"
                        sx={{
                            maxWidth: '150px',
                            bgcolor: '#1976d2',
                            ':hover': {
                                backgroundColor: 'orange',
                            },
                        }}
                        variant="contained"
                    >
                        {selectedLang.button}
                    </Button>
                </Box>
                <img style={{ maxWidth: '320px' }} src={img} alt="" />
            </Paper>
        </Box>
    );
};

export default MainPoster;
