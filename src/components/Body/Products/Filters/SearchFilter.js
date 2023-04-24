import { useSelector, useDispatch } from 'react-redux';
import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { searchItem, filterItems } from '../../../../services/catalogueSlice';
import { useTranslation } from '../../../../translate';

const SearchFilter = () => {

    const dispatch = useDispatch();

    const language = useSelector((state) => state.products.language);
    const t = useTranslation(language);

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
                placeholder={t.main.products.filters.search_placeholder}
            />
            <IconButton type="button" sx={{}} aria-label="search">
                <SearchIcon sx={{ marginRight: 1 }} />
            </IconButton>
        </Paper>
    );
};

export default SearchFilter;
