import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Flag from 'react-world-flags'

export default function ChooseLang() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 105 }}>
                <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    sx={{ color: 'inherit', boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                >
                    <MenuItem value="">
                        <Flag code={826} height={16} width={24} style={{ marginRight: '15px' }} />ENG
                    </MenuItem>
                    <MenuItem value={1}>
                        <Flag code={233} height={16} width={24} style={{ marginRight: '15px' }} /> EE
                    </MenuItem>
                    <MenuItem value={2}>
                        <Flag code={643} height={16} width={24} style={{ marginRight: '15px' }} /> RU
                    </MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
