import { useDispatch } from 'react-redux';
import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { searchItem, filterItems } from '../../../../services/catalogueSlice';

const SearchFilter = () => {

    const dispatch = useDispatch();

    const sortBySearch = (e) => {
        dispatch(searchItem(e.target.value));
        dispatch(filterItems());
    }

    return (
        <Paper
            component="form"
            sx={{
                display: 'flex',
                alignItems: 'center',
                p: 0,
                borderRadius: 0,
            }}
        >
            <InputBase
                sx={{ ml: 2, flex: 1, borderBottom: '1px solid rgb(223, 223, 223)' }}
                onKeyUp={sortBySearch}
                placeholder="Search in ReactShop"
            />
            <IconButton type="button" sx={{}} aria-label="search">
                <SearchIcon sx={{ marginRight: 1 }} />
            </IconButton>
        </Paper>
    );
};

export default SearchFilter;
