import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';


const ProductCard = ({product}) => {
  return (
    <Card sx={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      textAlign: 'center',
      width: '200px',
      margin: '16px auto'
    }}>
      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        sx={{
          width: '100%',
          height: 'auto'
        }}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="h6" color="text.primary">
          {product.price}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
