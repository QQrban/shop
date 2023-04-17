import { Accordion, AccordionDetails, AccordionSummary } from "./AccordionStyle";
import { Typography, FormControlLabel, Checkbox } from "@mui/material";

const ColorFilter = () => {
    return (
        <Accordion>
            <AccordionSummary >
                <Typography>Color</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ display: 'flex', flexDirection: 'column' }}>
                {['Black', 'Gold', 'Silver', 'White', 'Other'].map((year, i) => (
                    <FormControlLabel
                        key={i}
                        value={year}
                        control={<Checkbox />}
                        label={year}
                        labelPlacement="end"
                    />
                ))}
            </AccordionDetails>
        </Accordion>
    )
}

export default ColorFilter;