import * as React from 'react';
import {
    Box,
    IconButton,
    Typography,
    Stack,
    Card,
    CardContent,
    CardMedia,
    Button
  } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';





export default function ReportCard({header,title,img}) {
  return (
    <Box sx={{ minWidth: 300,borderRadius: '16px' }}>
      <Card>
        <CardContent>
            <Stack
                direction="row"
                justifyContent="space-between"
            >
                <Typography variant="body" sx={{fontWeight: 'bold',textAlign: 'left',ml: 2}}>
                    {header}
                </Typography>
                <IconButton size="small" sx={{mr: 2}}>
                    <ChevronRightIcon fontSize="inherit"/>
                </IconButton>
            </Stack>
            <Typography variant="h6" sx={{fontWeight: 'bold',textAlign: 'left',px: 2,mt: 5}}>
                {title}
            </Typography>
            <Stack
                direction="row"
                justifyContent="space-between"
                sx={{pt: 5}}
            >
                <Stack
                    spacing={1}
                >
                    <Button variant="outlined" sx={{bgcolor: '#f2f2f2',color: '#000'}} endIcon={<VerticalAlignBottomIcon/>}>
                        PDF(Korean)
                    </Button> 
                    <Button variant="outlined" sx={{bgcolor: '#f2f2f2',color: '#000'}} endIcon={<VerticalAlignBottomIcon/>}>
                        PDF(English)
                    </Button> 
                </Stack>
                <CardMedia
                    component="img"
                    sx={{ width: 80 }}
                    image={img}
                    alt="Live from space album cover"
                />
            </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}