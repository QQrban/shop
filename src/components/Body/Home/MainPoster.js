import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import img from '../../../img1.png';
import { useTranslation } from '../../../translate';

const MainPoster = () => {

    const language = useSelector((state) => state.products.language);
    const t = useTranslation(language);

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
                        {t.main.main_poster.title}
                        <span style={{ color: '#1976d2' }}> {t.main.main_poster.styled_title}</span>
                    </Typography>
                    <Typography
                        variant="p"
                        sx={{
                            fontSize: '17px',
                            lineHeight: '24px',
                        }}
                    >
                        {t.main.main_poster.text}
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
                        {t.main.main_poster.button}
                    </Button>
                </Box>
                <img style={{ maxWidth: '320px' }} src={img} alt="phone" />
            </Paper>
        </Box>
    );
};

export default MainPoster;
