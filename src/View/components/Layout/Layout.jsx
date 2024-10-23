// src/components/Layout.jsx
// import React from "react";
import { Box, Toolbar, CssBaseline, Divider } from "@mui/material";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const Layout = (children) => {
  return (
    <Box sx={{ display: "", flexDirection: "column", height: "100vh" }}>
      <CssBaseline />
      {/* Header */}
      <Header />

      <Box sx={{ display: "", flexGrow: 1 }}>
        <Sidebar />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
           background: "#1A1A24",
            p: 3,
            minHeight: "100%",
            backgroundPosition: "center",
          }}
        >
          <Toolbar />
          <Divider />
          <Box
            sx={{
              flexGrow: 1,
             background: "#1A1A24",
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
