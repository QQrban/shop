import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
} from './AccordionStyle';
import { Typography, FormControlLabel, Checkbox } from '@mui/material';
import { useDispatch } from 'react-redux';
import {
    addColor,
    removeColor,
    filterItems,
} from '../../../../services/catalogueSlice';

const ColorFilter = () => {
    const dispatch = useDispatch();

    const sortByColor = (e) => {
        if (e.target.checked) {
            dispatch(addColor(e.target.value));
            dispatch(filterItems());
        } else {
            dispatch(removeColor(e.target.value));
            dispatch(filterItems());
        }
    };

    return (
        <Accordion defaultExpanded>
            <AccordionSummary>
                <Typography>Color</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ display: 'flex', flexDirection: 'column' }}>
                {['black', 'silver', 'white', 'other'].map((color, i) => (
                    <FormControlLabel
                        key={i}
                        value={color}
                        control={<Checkbox onClick={sortByColor} />}
                        label={color}
                        labelPlacement="end"
                    />
                ))}
            </AccordionDetails>
        </Accordion>
    );
};

export default ColorFilter;
