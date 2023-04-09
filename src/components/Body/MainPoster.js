import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import img from "../../img1.png"

const MainPoster = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: '100%',
                },
            }}
        >

            <Paper className='main-poster' sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '20px 30px',
                justifyContent: 'space-around',
                borderRadius: '10px',
                gap: '40px'
            }} elevation={3}>
                <Box sx={{
                    maxWidth: '490px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px'
                }}>
                    <Typography
                        variant='h2'
                        sx={{
                            fontSize: '42px',
                            fontWeight: 'bold'
                        }}
                    >
                        Online store with products from
                        <span style={{ color: 'orange' }}> Apple</span> to Xiaomi</Typography>
                    <Typography
                        variant='p'
                        sx={{
                            fontSize: '17px',
                            lineHeight: '24px'
                        }}>
                        Visit us today and discover the best deals on electronic appliances in town!
                    </Typography>
                    <Button
                        className='shop-now'
                        sx={{
                            maxWidth: '150px',
                            bgcolor: '#1976d2',
                            ':hover': {
                                backgroundColor: 'orange'
                            }
                        }}
                        variant="contained">
                        Shop now
                    </Button>
                </Box>
                <img style={{ maxWidth: '320px' }} src={img} alt="" />
            </Paper>
        </Box>
    )
}

export default MainPoster