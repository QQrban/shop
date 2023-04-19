import { Paper } from '@mui/material';
import SearchFilter from './SearchFilter';
import PriceFilter from './PriceFilter';
import YearFilter from './YearFilter';
import MemoryFilter from './MemoryFilter';
import ColorFilter from './ColorFilter';

export default function ProdFIlters() {
    return (
        <Paper
            sx={{
                width: { xs: '100%', md: 300 },
                borderRadius: '14px',
                alignSelf: 'flex-start',
                overflow: 'hidden',
                position: { md: 'sticky', xs: 'static' },
                top: '150px',
            }}
        >
            <SearchFilter />
            <PriceFilter />
            <YearFilter />
            <MemoryFilter />
            <ColorFilter />
        </Paper>
    );
}
