import { Box } from '@mui/material'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { categories } from '../../../helpers/category';


const ProdCategories = () => {

    const showme = e => {
        e.target.children[1].classList.add('visible')
    }
    const closeme = e => {
        e.target.children[1].classList.remove('visible')
    }

    return (
        <Box sx={{ mt: '80px' }}>
            <Grid sx={{ flexGrow: 1, mt: '50px' }} container>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={1}>
                        {categories.map((category, i) => (
                            <Grid key={i} item >
                                <Paper
                                    onMouseOver={showme}
                                    onMouseLeave={closeme}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        cursor: 'pointer',
                                        position: 'relative',
                                        p: { sm: '20px', xs: '15px' },
                                        ':hover': {
                                            bgcolor: 'orange',
                                            color: 'white'
                                        }
                                    }}
                                >
                                    <Box sx={{ textAlign: 'center', pointerEvents: 'none' }}>
                                        <category.icon sx={{ fontSize: { sm: 52, xs: 39 }, }} />
                                    </Box>
                                    <Paper className='category-descr' sx={{
                                        position: 'absolute',
                                        bottom: -40,
                                        zIndex: 55,
                                        width: { md: 93, sm: 93, xs: 70 },
                                        pointerEvents: 'none',

                                    }}>
                                        <Typography
                                            sx={{
                                                pointerEvents: 'none',
                                                fontSize: 14,
                                                fontWeight: 500,
                                                height: 35,
                                                textAlign: 'center',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}
                                        >
                                            {category.text.length < 12 ? category.text : category.text.split(' ')[0]}
                                        </Typography>

                                    </Paper>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ProdCategories