import React from "react";
import { Cabecalho, ImagemPerfil, TextoPerfil } from "../ts/StylesHeader";
import { Text } from "react-native";

const Headerr = () => {
  return (
    <Cabecalho>
      <TextoPerfil>Luiz</TextoPerfil>
      <ImagemPerfil source={require("../images/minhaFoto2.png")} />
    </Cabecalho>
  );
};

export default Headerr;
