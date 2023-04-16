import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box, InputBase } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Slider from '@mui/material/Slider';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
    border: `none`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
}));

const inputStyles = {
    maxWidth: 60,
    height: 30,
    bgcolor: 'rgb(223, 223, 223)',
    p: '0 4px',
    borderRadius: '5px',
}

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

export default function ProdFIlters() {

    return (
        <div>
            <Accordion>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Price</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <InputBase sx={inputStyles} type='number' />
                        <InputBase sx={inputStyles} type='number' />
                    </Box>
                </AccordionDetails>
            </Accordion>
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
            <Accordion>
                <AccordionSummary >
                    <Typography>Producer</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ display: 'flex', flexDirection: 'column' }}>
                    {['Apple', 'Samsung', 'Xiaomi', 'Nokia', 'Sony', 'Huawei'].map((year, i) => (
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
            <Accordion>
                <AccordionSummary >
                    <Typography>Internal memory</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box >
                        <Slider
                            min={6}
                            max={512}
                            getAriaLabel={() => 'Temperature'}
                            getAriaValueText={valuetext}
                            defaultValue={[12, 128]}
                            valueLabelDisplay="auto"
                            marks={marks}
                        />
                    </Box>
                </AccordionDetails>
            </Accordion>
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
        </div>
    );
}