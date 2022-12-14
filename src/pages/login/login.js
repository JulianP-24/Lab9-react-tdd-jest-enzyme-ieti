import React, { useState, useContext } from "react";
import { Grid, Paper, Avatar, TextField } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import UserIcon from "@mui/icons-material/Person";
import PasswordIcon from "@mui/icons-material/Password";
import ListItemIcon from "@mui/material/ListItemIcon";
import authenticationService from "../../services/authenticationService";
import { ThemeContext } from "../../ThemeContext";

function Login() {
  const { state } = useContext(ThemeContext);
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 310,
    margin: "20px auto",
    background: `${state.isDarkMode ? "rgb(98, 3, 187)" : "white"}`,
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmail(evt) {
    setEmail(evt.target.value);
  }

  function handlePassword(evt) {
    setPassword(evt.target.value);
  }

  function handleLogin(evt) {
    evt.preventDefault();
    authenticationService.login(email, password).then(() => {
      console.log(window.$token);
      window.location = "/tasks";
      alert("Inicio exitoso");
    });
  }

  return (
    <Grid>
      <form onSubmit={handleLogin} className="">
        <Paper elevation={10} style={paperStyle} className="card">
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2 className={`${state.isDarkMode ? "dark" : "light"}`}>
              Iniciar Sesion
            </h2>
          </Grid>
          <div>
            <div>
              <ListItemIcon>
                <UserIcon
                  className={`${state.isDarkMode ? "dark" : "light"}`}
                />{" "}
              </ListItemIcon>
              <TextField
                variant="outlined"
                id="user"
                name="user"
                label="Username"
                type="email"
                value={email?.email}
                onChange={handleEmail}
              />
            </div>
            <br></br>
            <div>
              <ListItemIcon>
                <PasswordIcon
                  className={`${state.isDarkMode ? "dark" : "light"}`}
                />{" "}
              </ListItemIcon>
              <FormControl
                className={`${state.isDarkMode ? "dark" : "light"}`}
                variant="outlined"
              >
                <InputLabel
                  htmlFor="outlined-adornment-password"
                  value={password}
                >
                  Password
                </InputLabel>
                <OutlinedInput
                  fullWidth
                  label="Password"
                  id="outlined-adornment-password-login"
                  type="password"
                  name="password"
                  autoComplete="off"
                  onChange={handlePassword}
                />
              </FormControl>
            </div>
          </div>
          <br />
          <br />
          <br />
          <button
            className={`boton-${state.isDarkMode ? "dark" : "light"}`}
            type="submit"
            variant="contained"
          >
            Sign in
          </button>
        </Paper>
      </form>
    </Grid>
  );
}

export default Login;
