import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { SxProps } from "@mui/material";

import { GlobalContext } from "context/Global";
import images from "assets/images";


import "./Header.scss";

const buttonSx: SxProps = {
  borderRadius: "500px",
};

function Header() {
  const {
    token
  } = useContext(GlobalContext);

  const navigate = useNavigate();

  return (
    <div className="app__header">
      <div className="app__header-left">
        <img src={images.Logo} alt="logo" />
      </div>
      <div className="app__flex app__header-nav">
        <Button color="secondary" sx={buttonSx} onClick={() => navigate("/")}>
          Inicio
        </Button>
        <Button color="secondary" sx={buttonSx} onClick={() => navigate("/")}>
          Meus Amigos
        </Button>
        <Button color="secondary" sx={buttonSx} onClick={() => navigate("/")}>
          Meus Grupos
        </Button>
      </div>
      {token ? (
        <div className="app__flex app__header-right">
          <h3>Usuário</h3>
          <Avatar alt="Usuário" src={images.Profile} />
        </div>
      ) : (
        <Button
          color="secondary"
          onClick={() => navigate("/login")}
          sx={buttonSx}
        >
          Fazer Login
        </Button>
      )}
    </div>
  );
}

export default Header;
