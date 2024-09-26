import { TouchableOpacity } from "react-native";
import { Botao, CentralizaBotao, ViewBotao } from "../ts/StylesMain";
import { useFonts } from "expo-font";

interface FooterProps{storeData: () => void}


const Footer = ({storeData}:FooterProps) => {
    return (
      <CentralizaBotao>
        <TouchableOpacity onPress={storeData}>
          <ViewBotao>
            <Botao>Cadastrar</Botao>
          </ViewBotao>
        </TouchableOpacity>
      </CentralizaBotao>
    );
}

export default Footer;