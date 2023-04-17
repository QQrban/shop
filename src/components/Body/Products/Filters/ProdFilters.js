import { Paper } from '@mui/material';
import SearchFilter from './SearchFilter';
import PriceFilter from './PriceFilter';
import YearFilter from './YearFilter';
import MemoryFilter from './MemoryFilter';
import ColorFilter from './ColorFilter';

export default function ProdFIlters() {

    return (
        <Paper sx={{
            width: 320,
            overflow: 'hidden'
        }}>
            <SearchFilter />
            <PriceFilter />
            <YearFilter />
            <MemoryFilter />
            <ColorFilter />
        </Paper>

    );
}