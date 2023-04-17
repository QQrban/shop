import { Box } from '@mui/material'
import * as React from 'react';
import ProdFilters from './Filters/ProdFilters'
import Catalogue from './Catalogue/Catalogue';

const ProdBody = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            mt: 8,
        }}>

            <ProdFilters />
            <Box sx={{
                flex: 1,
                flexShrink: 0,
            }}>
                <Catalogue />
            </Box>
        </Box>
    )
}

export default ProdBody