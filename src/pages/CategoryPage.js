import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsByCategoryThunk, selectProducts } from '../redux/productSlice';
import ProductGrid from '../components/ProductGrid';
import { Typography } from '@mui/material';

const CategoryPage = () => {
    const { category } = useParams();
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);

    useEffect(() => {
        dispatch(fetchProductsByCategoryThunk(category));
    }, [dispatch, category]);

    return (
        <div>
            <Typography variant="h4" align="center" gutterBottom>
                {category.charAt(0).toUpperCase() + category.slice(1)}
            </Typography>
            <ProductGrid products={products} />
        </div>
    );
};

export default CategoryPage;
