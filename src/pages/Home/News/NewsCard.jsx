import React from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Button
  } from '@mui/material';

export default function NewsCard({img}) {
  return (
    <Box sx={{ minWidth: 300 }}>
        <Card>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={img}
            />
            <CardContent>
                <Button variant="outlined" color="success" size='small'>
                    Hana News
                </Button>
                <Typography variant="body1" sx={{textAlign: 'left',mt: 1}}>
                    Hana Bank opens a new specialized store for small business owners in ...
                </Typography>
                <Typography variant="body2" sx={{textAlign: 'left',mt: 3}}>
                    2024.02.08
                </Typography>
            </CardContent>
        </Card>
    </Box>
  );
}
