// src/components/Sidebar.jsx
// import React from 'react';
import {
    // Drawer, List, ListItem, ListItemIcon, Divider,
    TextField
} from '@mui/material';
import Box from '@mui/material/Box';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
// import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
// import { Link } from 'react-router-dom';
// import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';

const main = () => {
    return (
         <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      {/* <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" /> */}
    </Box>

      




  );
};

export default main;
