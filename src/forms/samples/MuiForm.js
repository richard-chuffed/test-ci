import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#1fa8df'
    }
  }
});

export default function SignUp() {
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{mb: 10}}>
        <CssBaseline />
        <Grid item xs={12} sm={6} pt="3rem" pb="2rem">
        <Typography align="center" variant="h3" component="h4">
          Material UI Form Sample
        </Typography>
      </Grid>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1,  bgcolor: "transparent", width: 60, height: 60, p:0.75 }} >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162.52 131.78667" height="131.787" width="162.52"><path d="M.234 22.756v-.095c0-7.268 5.56-13.254 13.352-13.254 4.8 0 7.79 1.615 10.166 4.276l-4.418 4.75c-1.616-1.71-3.23-2.8-5.796-2.8-3.61 0-6.176 3.182-6.176 6.936v.095c0 3.897 2.518 7.03 6.463 7.03 2.42 0 4.085-1.044 5.843-2.706l4.228 4.276c-2.472 2.708-5.322 4.656-10.404 4.656-7.65 0-13.258-5.892-13.258-13.162M24.797.663h7.22v12.83c1.665-2.14 3.8-4.087 7.46-4.087 5.464 0 8.646 3.61 8.646 9.455v16.486h-7.22V21.14c0-3.42-1.616-5.18-4.37-5.18-2.757 0-4.515 1.76-4.515 5.18v14.206h-7.22V.663M50.404 26.367V9.88h7.22v14.207c0 3.42 1.616 5.178 4.373 5.178 2.754 0 4.51-1.757 4.51-5.178V9.88h7.224v25.466H66.51v-3.61c-1.663 2.138-3.8 4.086-7.46 4.086-5.463 0-8.644-3.61-8.644-9.454M78.576 16.056H75.58v-5.938h2.996V8.502c0-2.802.712-4.845 2.042-6.175C81.948.995 83.898.33 86.46.33c2.282 0 3.804.286 5.134.714V7.03c-1.047-.38-2.044-.617-3.277-.617-1.666 0-2.614.854-2.614 2.755v.998h5.844v5.89h-5.75v19.29h-7.22v-19.29M96.08 16.056h-2.994v-5.938h2.993V8.502c0-2.802.713-4.845 2.044-6.175C99.454.995 101.4.33 103.968.33c2.28 0 3.8.286 5.133.714V7.03c-1.046-.38-2.044-.617-3.28-.617-1.662 0-2.613.854-2.613 2.755v.998h5.844v5.89h-5.747v19.29H96.08v-19.29"></path><path d="M125.44 20.618c-.425-3.232-2.327-5.417-5.368-5.417-2.993 0-4.94 2.14-5.51 5.418zm-17.957 2.137v-.095c0-7.27 5.177-13.255 12.588-13.255 8.505 0 12.402 6.604 12.402 13.827 0 .568-.047 1.234-.097 1.9h-17.72c.713 3.277 2.993 4.987 6.224 4.987 2.423 0 4.18-.76 6.176-2.612l4.133 3.656c-2.375 2.947-5.8 4.752-10.405 4.752-7.653 0-13.303-5.368-13.303-13.16M153.47 22.66v-.094c0-4.23-2.804-7.032-6.176-7.032-3.373 0-6.224 2.756-6.224 7.032v.095c0 4.23 2.852 7.032 6.224 7.032 3.372 0 6.177-2.802 6.177-7.03zm-19.62 0v-.094c0-8.505 5.555-13.16 11.59-13.16 3.85 0 6.224 1.756 7.934 3.8V.66h7.223v34.683h-7.223v-3.657c-1.757 2.375-4.18 4.133-7.933 4.133-5.937 0-11.59-4.656-11.59-13.16"></path><path d="M162.118 50.73c0 44.767-36.292 81.057-81.058 81.057C36.292 131.787 0 95.497 0 50.73h162.118" fill="#54A7DD"></path></svg>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
