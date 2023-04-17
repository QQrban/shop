import { Accordion, AccordionDetails, AccordionSummary } from "./AccordionStyle";
import { Typography } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const YearFilter = () => {
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
                        control={<Checkbox />}
                        label={year}
                        labelPlacement="end"
                    />
                ))}
            </AccordionDetails>
        </Accordion>
    )
}

export default YearFilter
