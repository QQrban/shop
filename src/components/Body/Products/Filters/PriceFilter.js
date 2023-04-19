import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
} from './AccordionStyle';
import { Typography, Box, InputBase } from '@mui/material';

const inputStyles = {
    maxWidth: 60,
    height: 30,
    bgcolor: 'rgb(223, 223, 223)',
    p: '0 4px',
    borderRadius: '5px',
};

const PriceFilter = () => {
    return (
        <Accordion>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography>Price</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <InputBase sx={inputStyles} type="number" />
                    <InputBase sx={inputStyles} type="number" />
                </Box>
            </AccordionDetails>
        </Accordion>
    );
};

export default PriceFilter;
