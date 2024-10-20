import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchLimitedProductsThunk } from '../redux/productSlice';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const LimitFilter = () => {
    const dispatch = useDispatch();
    const [limit, setLimit] = useState(5);

    const handleLimitChange = (event) => {
        const newLimit = event.target.value;
        setLimit(newLimit);
        dispatch(fetchLimitedProductsThunk(newLimit));
    };

    return (
        <FormControl variant="outlined" fullWidth>
            <InputLabel id="limit-select-label">Select Limit</InputLabel>
            <Select
                labelId="limit-select-label"
                value={limit}
                onChange={handleLimitChange}
            >
                <MenuItem value={5}>Show 5</MenuItem>
                <MenuItem value={10}>Show 10</MenuItem>
                <MenuItem value={15}>Show 15</MenuItem>
                <MenuItem value={20}>Show 20</MenuItem>
            </Select>
        </FormControl>
    );
};

export default LimitFilter;
