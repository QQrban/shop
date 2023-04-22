import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
} from './AccordionStyle';
import { useDispatch } from 'react-redux';
import { Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import {
    addYear,
    removeYear,
    filterItems,
} from '../../../../services/catalogueSlice';

const YearFilter = () => {
    const dispatch = useDispatch();

    const sortByYear = (e) => {
        if (e.target.checked) {
            dispatch(addYear(e.target.value));
            dispatch(filterItems());
        } else {
            dispatch(removeYear(e.target.value));
            dispatch(filterItems());
        }
    };
    return (
        <Accordion>
            <AccordionSummary>
                <Typography>Release year</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ display: 'flex', flexDirection: 'column' }}>
                {[2020, 2021, 2022, 2023].map((year, i) => (
                    <FormControlLabel
                        key={i}
                        value={year}
                        control={<Checkbox onClick={sortByYear} />}
                        label={year}
                        labelPlacement="end"
                    />
                ))}
            </AccordionDetails>
        </Accordion>
    );
};

export default YearFilter;
