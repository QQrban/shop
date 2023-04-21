import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { categories } from './category';
import { useDispatch } from 'react-redux';
import {
    filterByCompany,
    showAll,
    filterItems,
} from '../../../services/catalogueSlice';

const ProdCategories = () => {

    const dispatch = useDispatch();

    const showme = (e) => {
        e.target.children[1].classList.add('visible');
    };
    const closeme = (e) => {
        e.target.children[1].classList.remove('visible');
    };

    const sortByCompany = (e, category) => {
        dispatch(filterByCompany(category.text.toLowerCase()));
        dispatch(filterItems());
        document.querySelectorAll('.company').forEach(comp => comp.classList.remove('make-orange'))
        e.target.classList.contains(category.text.toLowerCase()) && e.target.classList.add('make-orange')
    };

    const resetCompany = () => {
        document.querySelectorAll('.company').forEach(comp => comp.classList.remove('make-orange'))
        dispatch(showAll());
        dispatch(filterItems());
    };

    return (
        <Box sx={{ mt: 12 }}>
            <Grid sx={{ flexGrow: 1, mt: '50px' }} container>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={{ xs: 1, sm: 3 }}>
                        {categories.map((category, i) => (
                            <Grid key={i} item>
                                <Paper
                                    className={category.text.toLowerCase() + ' company'}
                                    onMouseOver={showme}
                                    onMouseLeave={closeme}
                                    onClick={(e) => sortByCompany(e, category)}
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
                                            color: 'white',
                                        },
                                    }}
                                >
                                    <Box sx={{ textAlign: 'center', pointerEvents: 'none' }}>
                                        <category.icon size={52} />
                                    </Box>
                                    <Paper
                                        className="category-descr"
                                        sx={{
                                            position: 'absolute',
                                            bottom: -40,
                                            zIndex: 55,
                                            width: { md: 93, sm: 93, xs: 70 },
                                            pointerEvents: 'none',
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                pointerEvents: 'none',
                                                fontSize: 14,
                                                fontWeight: 500,
                                                height: 35,
                                                textAlign: 'center',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}
                                        >
                                            {category.text.length < 12
                                                ? category.text
                                                : category.text.split(' ')[0]}
                                        </Typography>
                                    </Paper>
                                </Paper>
                            </Grid>
                        ))}
                        <Grid item>
                            <Paper
                                onClick={resetCompany}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    width: { sm: 91.99, xs: 82 },
                                    height: { sm: 95.63, xs: 86 },
                                    position: 'relative',
                                    p: { sm: '20px', xs: '15px' },
                                    ':hover': {
                                        bgcolor: 'orange',
                                        color: 'white',
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        textAlign: 'center',
                                        pointerEvents: 'none',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    ALL
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProdCategories;
