import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Flag from 'react-world-flags';
import { setLanguage } from '../../services/stateService';
import { useSelector, useDispatch } from 'react-redux';

export default function ChooseLang() {

    const dispatch = useDispatch();
    const language = useSelector(state => state.products.language)

    const handleChange = (event) => {
        dispatch(setLanguage(event.target.value))
        console.log(language);
    };

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 105 }}>
                <Select
                    value={language}
                    onChange={handleChange}
                    displayEmpty
                    sx={{
                        color: 'inherit',
                        boxShadow: 'none',
                        '.MuiOutlinedInput-notchedOutline': { border: 0 },
                    }}
                >
                    <MenuItem value="en">
                        <Flag
                            code={826}
                            height={16}
                            width={24}
                            style={{ marginRight: '15px' }}
                        />
                        ENG
                    </MenuItem>
                    <MenuItem value="ee">
                        <Flag
                            code={233}
                            height={16}
                            width={24}
                            style={{ marginRight: '15px' }}
                        />{' '}
                        EE
                    </MenuItem>
                    <MenuItem value="ru">
                        <Flag
                            code={643}
                            height={16}
                            width={24}
                            style={{ marginRight: '15px' }}
                        />{' '}
                        RU
                    </MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
