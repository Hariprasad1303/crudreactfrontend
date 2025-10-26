import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";
const Signup = () => {
  return (
    <div>
      <Grid container sx={{ minHeight: "100vh" }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            background: "linear-gradient(135deg, #1e3a8a, #2563eb)",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            p: 4,
          }}
        >
          <Typography variant="h3" fontWeight="bold" textAlign="center" mb={2}>
            Welcome to DevElevate 🚀
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            sx={{ maxWidth: "400px", opacity: 0.9 }}
          >
            Empower your developer journey ,track your skills, goals, and
            progress all in one place.
          </Typography>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              width: "100%",
              maxWidth: 420,
              borderRadius: 4,
              boxShadow: 6,
              marginLeft: 5,
            }}
          >
            <CardContent
              sx={{
                width: "100%",
                maxWidth: 420,
                borderRadius: 4,
                boxShadow: 6,
              }}
            >
              <Typography
                variant="h5"
                fontWeight="600"
                textAlign="center"
                mb={3}
                color="primary"
              >
                Create Your Account
              </Typography>
              <Box component="form" noValidate autoComplete="off">
                <TextField
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Email Address"
                  type="email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />

                <Link to="/login">
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    sx={{ mt: 3, borderRadius: 2, py: 1.2 }}
                  >
                    Sign Up
                  </Button>
                </Link>

                <Typography
                  variant="body2"
                  textAlign="center"
                  mt={3}
                  color="text.secondary"
                >
                  Already have an account?{" "}
                  <Link href="/dashboard" underline="hover" color="primary">
                    Log in
                  </Link>
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Signup;
