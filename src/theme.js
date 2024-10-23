import { createTheme } from '@mui/material/styles';
import { red, green } from "@mui/material/colors"
// Define the custom MUI theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6", // Define your primary color
    },
    secondary: {
      main: "#19857b", // Define your secondary color
    },
    success: {
      main: green[500], // You can use material colors or hex values
    },
    error: {
      main: red.A400, // You can customize error color as well
    },
  },
  // palette: {
  //   // primary: {
  //   //   main: "#556cd6",
  //   // },
  //   // secondary: {
  //   //   main: "#19857b",
  //   // },
  //   // error: {
  //   //   main: red.A400,
  //   // },
  // },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "#fff",
          backgroundSize: "400% 400%",
          animation: "gradientAnimation 15s ease infinite",
          height: "100vh",
          margin: 0,
          padding: 0,
          color: "##fff", // Text color globally
        },
        "@keyframes gradientAnimation": {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
      },
    },
  },
})

export default theme;
