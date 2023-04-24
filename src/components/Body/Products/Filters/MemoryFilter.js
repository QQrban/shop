import { useSelector, useDispatch } from "react-redux";
import { Accordion, AccordionDetails, AccordionSummary } from "./AccordionStyle";
import { Typography, Box, Slider } from "@mui/material";
import { setMemory, filterItems } from "../../../../services/catalogueSlice";
import { useTranslation } from '../../../../translate';

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

    const language = useSelector((state) => state.products.language);
    const t = useTranslation(language);

    const dispatch = useDispatch();

    const sortByMemory = (e) => {
        dispatch(setMemory(e.target.value));
        dispatch(filterItems());
    }

    return (
        <Accordion>
            <AccordionSummary >
                <Typography>{t.main.products.filters.internal_memory}</Typography>
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