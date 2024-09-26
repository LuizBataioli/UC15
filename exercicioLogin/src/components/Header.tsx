import { Text } from "react-native";
import { Cabecalho, Titulo } from "../ts/StylesHeader";
import { useFonts } from "expo-font";

const Header = () => {
  
  useFonts({
    "Handjet-Bold": require("../assets/fonts/Handjet-Bold.ttf"),
    "Handjet-Medium": require("../assets/fonts/Handjet-Medium.ttf"),
    "Handjet-Regular": require("../assets/fonts/Handjet-Regular.ttf"),
  });

  return (
    <Cabecalho>
      <Titulo>Crie seu</Titulo>
      <Titulo>cadastro</Titulo>
    </Cabecalho>
  );
};

export default Header;
