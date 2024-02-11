import * as React from 'react';
import {
    Box,
    IconButton,
    Typography,
    Stack,
    Card,
    CardContent,
    CardMedia,
    Divider
  } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';





export default function ServiceCard({header,title,body}) {
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
            <Divider sx={{mt: 1,mb: 2}}/>
            <Typography variant="h6" sx={{fontWeight: 'bold',textAlign: 'left',px: 2}}>
                F{title}
            </Typography>
            <Stack
                direction="row"
                justifyContent="space-between"
                sx={{pt: 5}}
            >
                <Typography variant="body2" sx={{textAlign: 'left',ml: 2}}>
                    {body}
                </Typography>
                <CardMedia
                    component="img"
                    sx={{ width: 80 }}
                    image={require("../../../assets/images/hana_img.png")}
                    alt="Live from space album cover"
                />
            </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}