import { Routes, Route } from 'react-router-dom';

import Sidebar from './View/components/Sidebar/Sidebar';
import { Box } from '@mui/material';
import Header from './View/components/Header/Header';
import Main from './View/pages/main/Main';
function App() {
  return (
    <>
    <Box sx={{ display: 'flex' }}>
    <Header />
    <Sidebar />
      <Sidebar />
      <Routes>
      <Route path="/home" element={<Main />} />
      </Routes>
      </Box>
    </>
  );
}

export default App;
