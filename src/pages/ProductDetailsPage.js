import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../redux/productSlice';
import { Typography, Card, CardMedia, CardContent } from '@mui/material';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  if (loading || !selectedProduct) {
    return <p>Loading...</p>;
  }

  return (
    <Card>
      <CardMedia
        component="img"
        height="300"
        image={selectedProduct.image}
        alt={selectedProduct.title}
      />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {selectedProduct.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {selectedProduct.description}
        </Typography>
        <Typography variant="h6" color="textPrimary">
          ${selectedProduct.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDetailsPage;
