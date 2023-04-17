import { Accordion, AccordionDetails, AccordionSummary } from "./AccordionStyle";
import { Typography, Box, Slider } from "@mui/material";

const marks = [
    {
        value: 64,
        label: '64GB',
    },
    {
        value: 128,
        label: '128GB',
    },
    {
        value: 256,
        label: '256GB',
    },
    {
        value: 512,
        label: '512GB',
    },
]

function valuetext(value) {
    return `${value}GB`;
}

const MemoryFilter = () => {
    return (
        <Accordion>
            <AccordionSummary >
                <Typography>Internal memory</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Box >
                    <Slider
                        min={6}
                        max={512}
                        getAriaValueText={valuetext}
                        defaultValue={[64, 128]}
                        valueLabelDisplay="auto"
                        marks={marks}
                    />
                </Box>
            </AccordionDetails>
        </Accordion>
    )
}

export default MemoryFilter