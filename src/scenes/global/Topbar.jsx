import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette);
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    // Navigate to the login page when logging out
    navigate("/loginout");
  };

  // Retrieve the user's information from local storage
  const userData = JSON.parse(localStorage.getItem("token-info"));
  // Extract the user's name
  const userName = userData ? userData.name : "";

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      <Box display="flex" alignItems="center">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>

        <Typography variant="h5" color={colors.grey[300]} sx={{ mx: 2 }}>
          Welcome, {userName}
        </Typography>

        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>

        <Typography
          variant="h6"
          color={colors.grey[300]}
          sx={{ mx: 2, cursor: "pointer" }}
          onClick={handleLogout}
        >
          Log Out
        </Typography>
      </Box>
    </Box>
  );
};

export default Topbar;
