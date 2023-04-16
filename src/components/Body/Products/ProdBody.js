import { Paper, Box } from '@mui/material'
import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ProdFilters from './Filters/ProdFilters';

const ProdBody = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            mt: 8,
        }}>
            <Paper sx={{
                width: 320,
                overflow: 'hidden'
            }}>
                <Paper
                    component="form"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        p: 0,
                        borderRadius: 0
                    }}
                >
                    <InputBase
                        sx={{ ml: 2, flex: 1, borderBottom: '1px solid rgb(223, 223, 223)' }}
                        placeholder="Search in ReactShop"
                    />
                    <IconButton type="button" sx={{}} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
                <ProdFilters />
            </Paper>
            <Paper sx={{
                flex: 1,
                flexShrink: 0,
            }}>
            </Paper>
        </Box>
    )
}

export default ProdBody