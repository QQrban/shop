import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import img from '../../../img2.png';

const SecondaryPoster = () => {
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
                        We will exchange your
                        <span style={{ color: 'orange' }}> phone</span> on trade in
                    </Typography>
                    <Typography
                        variant="p"
                        sx={{
                            fontSize: '17px',
                            lineHeight: '24px',
                        }}
                    >
                        We will exchange your equipment for a new one under the trade-in
                        program
                    </Typography>
                    <Button
                        className="shop-now"
                        sx={{
                            maxWidth: '150px',
                            bgcolor: 'orange',
                        }}
                        variant="contained"
                    >
                        Learn more
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default SecondaryPoster;
