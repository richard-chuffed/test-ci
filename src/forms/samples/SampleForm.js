import { useState } from "react";
import {
  Box,
  Button,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { DevTool } from "@hookform/devtools";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const SampleForm = () => {
  const [formData, setFormData] = useState("");
  const onSubmit = (data, e) => setFormData(JSON.stringify(data));

  const schema = yup.object().shape({
    username: yup.string().min(4).required(),
    password: yup.string().required("password is required"),
    acceptTerms: yup.boolean().oneOf([true], "Please agree to the terms"),
  });
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Paper sx={{pb: 5}} elevation={3}>
      <Grid item xs={12} sm={6} pt="3rem" pb="2rem">
        <Typography align="center" variant="h3" component="h4">
          React Hook Form Prototype
        </Typography>
      </Grid>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        px={3}
        py={2}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        error={errors}
      >
        <Grid
          container
          spacing={1}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h5" gutterBottom component="div">
            Log in
          </Typography>
          <Grid item xs={12} sm={12} alignContent="center">
            <TextField
              {...register("username", { required: true })}
              label="Username"
              variant="outlined"
            />
            <FormHelperText align="center" error>
              {errors.username && <>Username is required.</>}
            </FormHelperText>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={12} alignContent="center">
            <TextField
              {...register("password", { required: true })}
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <FormHelperText align="center" error>
              {errors.password && <>Password is required.</>}
            </FormHelperText>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Controller
                  control={control}
                  name="acceptTerms"
                  defaultValue="false"
                  inputRef={register()}
                  render={({ field: { onChange } }) => (
                    <Checkbox
                      color="primary"
                      onChange={(e) => onChange(e.target.checked)}
                    />
                  )}
                />
              }
              label={
                <Typography color={errors.acceptTerms ? "error" : "inherit"}>
                  I have read and agree to the Terms *
                </Typography>
              }
            />
            <br />
            <FormHelperText align="center" error>
              {errors.acceptTerms && errors.acceptTerms.message}
            </FormHelperText>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            mt={3}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit(onSubmit)}
              align="center"
            >
              Register
            </Button>
          </Box>
        </Grid>
        <DevTool control={control} />
      </Box>
      {formData !== "" && (
        <Box>
          <Grid>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                data submitted:
              </Typography>
              <Typography variant="h5" component="div">
                {formData}
              </Typography>
            </CardContent>
          </Grid>
        </Box>
      )}
    </Paper>
  );
};

export default SampleForm;
