import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
} from './AccordionStyle';
import { Typography, Box, InputBase } from '@mui/material';
import { setMinPrice, setMaxPrice, filterItems } from '../../../../services/catalogueSlice';
import { useDispatch } from 'react-redux';

const inputStyles = {
    maxWidth: 60,
    height: 30,
    bgcolor: 'rgb(223, 223, 223)',
    p: '0 4px',
    borderRadius: '5px',
};

const PriceFilter = () => {
    const dispatch = useDispatch();

    const sortByMinPrice = (e) => {
        dispatch(setMinPrice(e.target.value));
        dispatch(filterItems());
    }

    const sortByMaxPrice = (e) => {
        dispatch(setMaxPrice(e.target.value));
        dispatch(filterItems());
    }

    return (
        <Accordion>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography>Price</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <InputBase onKeyUp={sortByMinPrice} sx={inputStyles} type="number" />
                    <InputBase onKeyUp={sortByMaxPrice} sx={inputStyles} type="number" />
                </Box>
            </AccordionDetails>
        </Accordion>
    );
};

export default PriceFilter;
