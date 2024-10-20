import React from 'react';
import { Card, CardContent, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    return (
        <Card>
            <CardContent>
                <Link to={`/category/${category}`} style={{ textDecoration: 'none' }}>
                    <Button >
                        <Typography variant="h6">{category.charAt(0).toUpperCase() + category.slice(1)}</Typography>
                    </Button>
                </Link>
            </CardContent>
        </Card>
    );
};

export default CategoryCard;
