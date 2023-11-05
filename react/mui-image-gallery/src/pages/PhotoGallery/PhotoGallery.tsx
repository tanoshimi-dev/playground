import React from 'react';
import { Typography, Stack, Container } from '@mui/material';

import PhotoViewer from '@/components/PhotoViewer/PhotoViewer';


const PhotoGallery = () => {
  return (
    <Container sx={{ py: 2, position: 'relative' }}>
      <Stack gap={1} my={2}>
        <PhotoViewer/>
      </Stack>
    </Container>
  );
};

export default PhotoGallery;
