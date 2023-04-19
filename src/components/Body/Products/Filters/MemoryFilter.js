import { Accordion, AccordionDetails, AccordionSummary } from "./AccordionStyle";
import { Typography, Box, Slider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

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
    const catalogue = useSelector(state => state.products.catalogue);
    // const products = useSelector(state => state.products.products);
    // const dispatch = useDispatch();

    const sortByMemory = (e) => {
        if (!catalogue) return
        // const newCatalogue = products[0].all_products.filter(item => +item.memory >= e.target.value[0] && item.memory <= e.target.value[1]);
    }

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
                        onChange={sortByMemory}
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