import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductGrid from '../components/ProductGrid';
import { Grid, Typography } from '@mui/material';
import CategoryCard from '../components/CategoryCard';
import { fetchCategoriesThunk, selectCategories, selectProducts, selectLoading } from '../redux/productSlice';


const Home = () => {
    const dispatch = useDispatch();
    const categories = useSelector(selectCategories);
    const products = useSelector(selectProducts);
    const loading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchCategoriesThunk());
    }, [dispatch]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!products || products.length === 0) {
        return <p>No products available</p>;
    }

    if (categories.length === 0) {
        return <p>No categories found.</p>;
    }

    return (
        <div>
            {/* Flash Sale Section */}
            <div className='flashSale'>

                <Typography variant="h5" gutterBottom>
                    Flash Sale
                </Typography>

                <ProductGrid products={products} />

            </div>

            {/* Category Section */}
            <div className='category'>
                <Typography variant="h5" gutterBottom>
                    Category
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                    {categories.map((category) => (
                        <CategoryCard key={category} category={category} />
                    ))}

                </Grid>
            </div>



        </div>
    );
};

export default Home;
