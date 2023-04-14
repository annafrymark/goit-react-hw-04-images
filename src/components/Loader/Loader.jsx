import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import css from './loader.module.css';

export default function CircularIndeterminate() {
  return (
    <Box className={css.Box} sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}
