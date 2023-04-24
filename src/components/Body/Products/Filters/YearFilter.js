import { useSelector, useDispatch } from 'react-redux';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
} from './AccordionStyle';
import { Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import {
    addYear,
    removeYear,
    filterItems,
} from '../../../../services/catalogueSlice';
import { useTranslation } from '../../../../translate';

const YearFilter = () => {

    const dispatch = useDispatch();

    const language = useSelector((state) => state.products.language);
    const t = useTranslation(language);

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
                <Typography>{t.main.products.filters.release_year}</Typography>
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
