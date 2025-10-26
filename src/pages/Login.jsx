import React from "react";
import {
  Box,
  Grid,
  Paper,
  TextField,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import {Link} from  'react-router-dom'
import LoginIcon from "@mui/icons-material/Login";
import GoogleIcon from "@mui/icons-material/Google";
import { Router } from "react-router-dom";

const Login = () => {
  return (
    <Grid
      container
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      {/* Card */}
      <Grid item xs={12} sm={10} md={5} lg={4}>
        <Paper
          elevation={10}
          sx={{
            borderRadius: 4,
            backdropFilter: "blur(16px)",
            backgroundColor: "rgba(255,255,255,0.85)",
            p: 5,
            mx: "auto",
          }}
        >
          {/* Header */}
          <Typography
            variant="h4"
            align="center"
            fontWeight={700}
            color="primary"
            gutterBottom
          >
            <LoginIcon
              fontSize="large"
              sx={{ verticalAlign: "middle", mr: 1 }}
            />
            Welcome Back
          </Typography>

          <Typography
            variant="body1"
            align="center"
            sx={{ color: "text.secondary", mb: 3 }}
          >
            Log in to your DevElevate account
          </Typography>

          {/* Form */}
          <Box component="form" noValidate autoComplete="off">
            <TextField
              label="Email Address"
              fullWidth
              required
              margin="normal"
              type="email"
            />
            <TextField
              label="Password"
              fullWidth
              required
              margin="normal"
              type="password"
            />

            <Typography
              variant="body2"
              align="right"
              sx={{ mt: 1, color: "primary.main", cursor: "pointer" }}
            >
              Forgot password?
            </Typography>

            <Link to="/dashboard">
              <Button
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  mt: 4,
                  py: 1.5,
                  borderRadius: 3,
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "1rem",
                  background:
                    "linear-gradient(90deg, #1e3a8a 0%, #3b82f6 100%)",
                  ":hover": {
                    background:
                      "linear-gradient(90deg, #3b82f6 0%, #1e3a8a 100%)",
                  },
                }}
              >
                Log In
              </Button>
            </Link>
          </Box>

          {/* Divider */}
          <Divider sx={{ my: 4 }}>OR</Divider>

          {/* Google Button */}
          <Button
            fullWidth
            variant="outlined"
            size="large"
            startIcon={<GoogleIcon />}
            sx={{
              py: 1.3,
              borderRadius: 3,
              fontWeight: 500,
              textTransform: "none",
              borderColor: "#cbd5e1",
              color: "#1e293b",
              ":hover": { backgroundColor: "#f8fafc" },
            }}
          >
            Continue with Google
          </Button>

          {/* Footer */}
          <Typography align="center" mt={3} color="text.secondary">
            Don’t have an account?{" "}
            <Link
              href="/signup"
              underline="hover"
              sx={{ color: "#2563eb", fontWeight: 600 }}
            >
              Sign Up
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
