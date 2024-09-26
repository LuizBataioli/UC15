import AntDesign from "@expo/vector-icons/AntDesign";
import { TouchableOpacity } from "react-native";
import * as Linking from "expo-linking";
import {
  CentralizarCard,
  Container,
  Conteudo,
  RedesSociais,
  Titulo,
  ViewSociais,
} from "../ts/Styles";

const Card = () => {
  return (
    <CentralizarCard>
      <Container>
        <Titulo>Sobre mim:</Titulo>
        <Conteudo>
          Me chamo Luiz Henrique Silva Bataioli, sou estudante de programação no
          Senac-RS, atualmente faço parte da equipe de suporte técnico da DeServ
          como estagiário.
        </Conteudo>
      </Container>
      <ViewSociais>
        <RedesSociais>
          <TouchableOpacity>
            <AntDesign name="instagram" size={60} color="white" onPress={Instagram} />
          </TouchableOpacity>
        </RedesSociais>
        <RedesSociais>
          <TouchableOpacity>
            <AntDesign name="linkedin-square" size={60} color="white" onPress={Linkedin}/>
          </TouchableOpacity>
        </RedesSociais>
        <RedesSociais>
          <TouchableOpacity>
            <AntDesign name="github" size={60} color="white" onPress={GitHub}/>
          </TouchableOpacity>
        </RedesSociais>
      </ViewSociais>
    </CentralizarCard>
  );
};

const Instagram = () => {
Linking.openURL("https://www.instagram.com/luiz_bataioli/");
};

const Linkedin = () => {
  Linking.openURL("https://www.linkedin.com/in/luiz-henrique-silva-bataioli/");
}

const GitHub = () => {
  Linking.openURL("https://github.com/LuizBataioli");
}

export default Card;
