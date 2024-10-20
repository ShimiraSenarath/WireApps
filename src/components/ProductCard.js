import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <Card>
            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={product.image}
                    alt={product.title}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {product.title}
                    </Typography>
                    <Typography variant="h6" color="textPrimary">
                        ${product.price}
                    </Typography>
                </CardContent>
            </Link>
        </Card>
    );
};

export default ProductCard;
