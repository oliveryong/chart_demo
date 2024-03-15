import { useState } from "react";
import { Box, IconButton, Typography, InputBase } from "@mui/material";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

const Sign = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to hold validation error
  const navigate = useNavigate();

  const login = () => {
    console.log(name, password);
    // Your login logic here
    const userData = {
      name,
      password,
    };
    localStorage.setItem("token-info", JSON.stringify(userData));
    // Navigate to the "/" page after successful login
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !password) {
      setError("Please fill in all fields."); // Set error message if fields are empty
    } else {
      setError(""); // Clear error message if all fields are filled
      login(); // Call the login function if fields are not empty
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default form submission on "Enter" key press
    }
  };

  return (
    <Box m="20px">
      <Header title="Sign In" subtitle="Simple Sign In" />
      <Box height="75vh">
        <form onSubmit={handleSubmit}>
          <Box
            display="flex"
            bgcolor="#f0f0f0"
            borderRadius="3px"
            alignItems="center"
            mb={2}
          >
            <InputBase
              sx={{ ml: 2, flex: 1 }}
              placeholder="Name"
              value={name}
              name="name"
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
          </Box>
          <Box
            display="flex"
            bgcolor="#f0f0f0"
            borderRadius="3px"
            alignItems="center"
            mb={2}
          >
            <InputBase
              type="password"
              sx={{ ml: 2, flex: 1 }}
              placeholder="Password"
              value={password}
              name="password"
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
          </Box>
          {error && (
            <Typography variant="body2" color="error" sx={{ mb: 1 }}>
              {error}
            </Typography>
          )}
          <IconButton type="submit">
            <Typography variant="h6" sx={{ m: "15px 20px" }}>
              Submit
            </Typography>
          </IconButton>
        </form>
      </Box>
    </Box>
  );
};

export default Sign;


