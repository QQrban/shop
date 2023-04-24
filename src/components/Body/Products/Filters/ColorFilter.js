import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
} from './AccordionStyle';
import {
    Typography,
    FormControlLabel,
    Checkbox
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import {
    addColor,
    removeColor,
    filterItems,
} from '../../../../services/catalogueSlice';
import { useTranslation } from '../../../../translate';


const ColorFilter = () => {
    const dispatch = useDispatch();

    const language = useSelector((state) => state.products.language);
    const t = useTranslation(language);

    const sortByColor = (e) => {
        if (e.target.checked) {
            dispatch(addColor(e.target.value.toLowerCase()));
            dispatch(filterItems());
        } else {
            dispatch(removeColor(e.target.value.toLowerCase()));
            dispatch(filterItems());
        }
    };

    return (
        <Accordion defaultExpanded>
            <AccordionSummary>
                <Typography>{t.main.products.filters.color.name}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ display: 'flex', flexDirection: 'column' }}>
                {t.main.products.filters.color.colors.map((color, i) => (
                    <FormControlLabel
                        key={i}
                        label={color.label}
                        value={color.value}
                        control={<Checkbox onClick={sortByColor} />}
                        labelPlacement="end"
                    />
                ))}
            </AccordionDetails>
        </Accordion>
    );
};

export default ColorFilter;
