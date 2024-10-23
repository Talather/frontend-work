// import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FlagIcon from "@mui/icons-material/Flag";
import DiamondIcon from "@mui/icons-material/Diamond";

const Header = () => {
  return (
    <AppBar
      sx={{
        width: "100%",
        background: "#1A1A24",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left side - Email */}
        <Box sx={{ marginLeft: "56px", display: "flex", alignItems: "center" }}>
          <Typography
            sx={{ display: "flex", alignItems: "center", padding: 0 }}
          >
            <AccountBoxIcon
              sx={{ padding: 0, width: "30px", marginRight: "5px" }}
            />
            irfan.khan32202@gmail.com
          </Typography>

          <Typography>
            <UnfoldMoreIcon />
          </Typography>
        </Box>

        










        {/* Right side - Icons with text */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #1A1A24",
              borderRadius: "5px",
              padding: "0 8px",
              fontSize: "13px",
              height: "24px",
              minWidth: "auto",
              marginRight: "16px",
              color: "#1A1A24",
              justifyContent: "center",
              background: "#1A1A24",
              transition:
                "border 0.3s, background-color 0.3s, color 0.3s, opacity 0.3s",
              "&:hover": {
                backgroundColor: "#1A1A24",
                color: "#1A1A24",
              },
            }}
          >











            <FlagIcon
              sx={{ marginRight: "5px", color: "#fff", fontSize: "14px" }}
            />
            <Typography sx={{ color: "#ffa510", fontWeight: 500 }}>
              20k
            </Typography>
            <Typography
              sx={{ marginLeft: "4px", color: "#ccc", fontSize: "12px" }}
            >
              Race
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: "1px solid ##1A1A24",
              borderRadius: "5px",
              padding: "0 8px",
              fontSize: "13px",
              height: "24px",
              minWidth: "auto",
              color: "#1A1A24",
              justifyContent: "center",
              background: "#1A1A24",
              transition:
                "border 0.3s, background-color 0.3s, color 0.3s, opacity 0.3s",
            }}
          >
            <DiamondIcon
              sx={{ marginRight: "5px", color: "#fff", fontSize: "14px" }}
            />
            <Button
              sx={{
                fontWeight: 500,
                color: "#ccc",
                fontSize: "12px",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              Get Ad-Free
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
