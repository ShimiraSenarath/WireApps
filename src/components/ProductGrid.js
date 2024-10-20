import React from 'react';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';
import LimitFilter from './LimitFilter';

const ProductGrid = ({ products }) => {

    return (
        <div>
            <Grid container spacing={2}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={3} key={product.id}>
                        <ProductCard product={product} />
                    </Grid>
                ))}

            </Grid>
            <div className='Limitation'>
                <LimitFilter />

            </div>
        </div>

    );
};

export default ProductGrid;
