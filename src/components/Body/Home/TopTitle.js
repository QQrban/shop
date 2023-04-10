import { Box, Typography, Button } from '@mui/material'

const TopTitle = ({ name }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                p: '0 10px',
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    fontWeight: '500',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                }}
            >
                <div className="hot-category-subtl">{name}</div>
            </Typography>
            <Button
                sx={{
                    color: 'orange',
                    ':hover': {
                        backgroundColor: 'orange',
                        color: 'white',
                    },
                }}
            >
                Show all
            </Button>
        </Box>
    )
}

export default TopTitle