import { Box, Button, Typography } from '@mui/material'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { categories } from '../../../helpers/category';


const HotCategories = () => {


    return (
        <Box sx={{ mt: '80px' }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                p: '0 10px'
            }}>
                <Typography
                    variant='h5'
                    sx={{
                        fontWeight: '500',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px'
                    }}
                >
                    <div className='hot-category-subtl'>Hot Categories</div>
                    <LocalFireDepartmentIcon sx={{ color: 'orange', fontSize: '34px' }} />
                </Typography>
                <Button sx={{
                    color: 'orange',
                    ':hover': {
                        backgroundColor: 'orange',
                        color: 'white'
                    }
                }}>Show all</Button>
            </Box>
            <Grid sx={{ flexGrow: 1, mt: '50px' }} container>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={4}>
                        {categories.slice(0, 6).map((category, i) => (
                            <Grid key={i} item>
                                <Paper
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: 140,
                                        width: 160,
                                        borderRadius: '14px',
                                        bgcolor: '#bbbbbb30',
                                        cursor: 'pointer',
                                        ':hover': {
                                            bgcolor: 'orange',
                                            color: 'white'
                                        }
                                    }}
                                >
                                    <Box sx={{ textAlign: 'center', }}>
                                        <category.icon sx={{ fontSize: '32px' }} />
                                        <Typography>
                                            {category.text}
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                </Grid>
            </Grid>
        </Box>
    )
}

export default HotCategories