import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import img from '../../../img1.png';

const chosenLang = {
    ENG: {
        title: 'We will exchange your phone ',
        styled_title: 'on trade in',
        text: 'Trade in your old phone for a new one with our exchange program.',
        button: 'shop now'
    },
    EE: {
        title: 'Pakume teile võimalust vahetada ',
        styled_title: 'vahetada oma telefon uue vastu',
        text: 'Vahetage oma vana telefon uue vastu meie vahetusprogrammi abil',
        button: ' Loe rohkem'
    },
    RU: {
        title: 'Мы предоставляем услугу ',
        styled_title: 'обмена вашего телефона на новый',
        text: 'Обменяйте свой старый телефон на новый в рамках нашей программы',
        button: 'Подробнее'
    },
}

const SecondaryPoster = () => {
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
                mt: '90px',
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
                    bgcolor: '#1976d224',
                }}
                elevation={3}
            >
                <img style={{ maxWidth: '350px' }} src={img} alt="" />
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
                        <span style={{ color: 'orange' }}>{selectedLang.styled_title}</span>
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
                            bgcolor: 'orange',
                        }}
                        variant="contained"
                    >
                        {selectedLang.button}
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default SecondaryPoster;
