import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchSortedProductsThunk } from '../redux/productSlice';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const SortFilter = () => {
    const dispatch = useDispatch();

    const [sortOrder, setSortOrder] = React.useState('');

    const handleSortChange = (event) => {
        const order = event.target.value;
        setSortOrder(order);
        dispatch(fetchSortedProductsThunk(order));
    };

    return (
        <FormControl variant="outlined" sx={{ minWidth: 120, margin: 1 }}>
            <InputLabel id="sort-label">Sort</InputLabel>
            <Select
                labelId="sort-label"
                id="sort"
                value={sortOrder}
                onChange={handleSortChange}
                label="Sort"
            >
                <MenuItem value="asc">Sort Ascending</MenuItem>
                <MenuItem value="desc">Sort Descending</MenuItem>
            </Select>
        </FormControl>
    );
};

export default SortFilter;
