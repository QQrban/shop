import React from 'react'
import { Paper, InputBase, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const SearchFilter = () => {
    return (
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
                <SearchIcon sx={{ marginRight: 1 }} />
            </IconButton>
        </Paper>
    )
}

export default SearchFilter;