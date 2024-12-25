import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login: React.FC = (): JSX.Element => {

 
  let navigate = useNavigate();

  return (
    <>
    <Grid sx={{ width: "100%" }}>
      <Typography
        component="p"
        variant="subtitle1"
        sx={{ mt: 2, color: "#6B6B87" }}
      >
        Welcome back!
      </Typography>
      <Typography component="h1" variant="h5" fontWeight="bold">
        Login to your account
      </Typography>
    </Grid>

    <Box
      // onSubmit={handleSubmit(onSubmit)}
      component="form"
      noValidate
      sx={{ mt: 2, width: "100%" }}
    >
      {/* ------------------------ email ----------------------- */}

      <TextField
        label="Email"
        required
        fullWidth
        id="email"
        type="email"
        autoComplete="email"
      
        // error={!!errors.email}
        // helperText={errors.email?.message}
        sx={{
          backgroundColor: "#F4F4FF",
          mt: 2,
        }}
        placeholder="john@mail.com"
        // {...register("email", EmailValidation)}
      />
      <Typography
        variant="body2"
        sx={{
          mt: 1,
          color: "#757575", 
        }}
      >
        
      </Typography>

      {/* ------------------------ password ----------------------- */}

      <TextField
        required
        fullWidth
        name="password"
        type="password"
        id="password"
        autoComplete="password"
        label="Password"
       
        // error={!!errors.password}
        // helperText={errors.password?.message}
        sx={{
          backgroundColor: "#F4F4FF",
          mt: 3,
        }}
        placeholder="**********"
        // {...register("password", PasswordValidation)}
      />
      <Typography
        variant="body2"
        sx={{
          mt: 1,
          color: "#757575", // لون رمادي خفيف للنص التوضيحي
        }}
      >
      
      </Typography>
      {/* ------------------------ remember me and forgot password ----------------------- */}
      <Grid container alignItems="center">
        <Grid item xs>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember Me"
            sx={{
              color: "#6251DD",
            }}
          />
        </Grid>
        <Grid item onClick={() => navigate("/forgetpass")}>
          <Typography
            variant="body2"
            sx={{
              color: "#6251DD",
              cursor: "pointer",
            }}
          >
            Forgot Password ?
          </Typography>
        </Grid>
      </Grid>
      {/* ==================================== */}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          fontSize: "18px",
          py: 1,
          mt: 6,
          backgroundColor: "#EF6B4A",
          "&:hover": {
            backgroundColor: "#Ee6B4c",
          },
        }}
      >
        Login
      </Button>
      <Button
        onClick={() => {
          navigate("/register");
        }}
        type="submit"
        fullWidth
        variant="outlined"
        sx={{
          fontSize: "18px",
          py: 1,
          mt: 1,
          mb: 2,
          color: "#6251DD",
          borderColor: "#6251DD",
          "&:hover": {
            borderColor: "#6251DD",
            backgroundColor: "rgba(98, 81, 221, 0.08)",
          },
        }}
      >
        Register
      </Button>
      {/* {loading? <Typography sx={{
        textAlign:"center"
      }}
      >
       Logging in...
      </Typography>:""} */}
    </Box>
  </>
  );
};

export default Login;
