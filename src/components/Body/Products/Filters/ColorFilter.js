import { Accordion, AccordionDetails, AccordionSummary } from "./AccordionStyle";
import { Typography, FormControlLabel, Checkbox } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setCatalogue } from "../../../../services/stateService";

const colors = [];
const ColorFilter = () => {
    const products = useSelector(state => state.products.products);
    const catalogue = useSelector(state => state.products.catalogue);
    const dispatch = useDispatch();

    const sortByColor = (e) => {
        if (!catalogue) return
        if (e.target.checked) {
            if (colors.includes(e.target.value)) {
                return;
            } else {
                colors.push(e.target.value)
            }
        } else {
            colors.splice(colors.indexOf(e.target.value), 1)
        }
        const newCatalogue = products[0].all_products.filter(item => colors.includes(item.color));
        console.log(newCatalogue);
        dispatch(setCatalogue(newCatalogue))
    }

    return (
        <Accordion defaultExpanded>
            <AccordionSummary >
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
    )
}

export default ColorFilter;