import { Box, Button, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ForwardIcon from '@mui/icons-material/Forward';

const Subscribe = () => {
    return (
        <Box
            sx={{
                mt: '30px',
                display: 'flex',
                alignItems: 'center',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: { md: 'space-between' },
                gap: 6,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    gap: '16px',
                }}
            >
                <Button
                    sx={{
                        borderRadius: '14px',
                        fontSize: '14px',
                        p: '8px 16px',
                        bgcolor: 'orange',
                    }}
                    variant="contained"
                >
                    All promotions
                </Button>
                <Typography sx={{ color: '#ffffffa2', maxWidth: 150 }}>
                    Special offers and discounts up to 50%
                </Typography>
            </Box>
            <Paper
                component="form"
                sx={{
                    p: '2px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    width: { xs: '100%', md: 400 },
                }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Subscribe to our newsletter"
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton
                    sx={{
                        p: '10px',
                        bgcolor: 'orange',
                        color: 'white',
                        ':hover': {
                            bgcolor: '#1976d2',
                        },
                    }}
                >
                    <ForwardIcon />
                </IconButton>
            </Paper>
        </Box>
    );
};

export default Subscribe;
