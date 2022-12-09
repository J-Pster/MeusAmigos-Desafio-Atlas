import * as React from "react";
import { useNavigate } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { GlobalContext } from "context/Global";
import api from 'services/api/api';
import { LoginRequest, LoginResponse } from "models/interfaces/types";

export default function SignIn() {
  const {
    setToken
  } = React.useContext(GlobalContext);

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const userLogin = {
      email: data.get("email"),
      password: data.get("password"),
    } as LoginRequest;

    const response = await api.login.postLogin(userLogin);
    if("kind" in response) {
      alert(`Houve um erro ao tentar logar, verifique se escreveu tudo certo! ${response.kind}`)
      return;
    }

    await setToken(response.token);
    navigate("/");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Painel Administrativo
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Seu Email"
            placeholder="joaopsterdev@gmail.com"
            name="email"
            autoComplete="email"
            color="secondary"
            type="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            placeholder="%joaopster2022%"
            type="password"
            id="password"
            autoComplete="current-password"
            color="secondary"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="secondary" />}
            label="Lembrar credenciais"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            color="secondary"
          >
            Entrar
          </Button>
          <Grid container>
            <Grid item xs>
            <Button
                variant="text"
                sx={{ fontSize: 11 }}
              >
                Perdeu a senha?
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="text"
                sx={{ fontSize: 11 }}
              >
                Não tem um conta? Registre-se
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
