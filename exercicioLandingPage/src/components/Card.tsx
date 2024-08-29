import AntDesign from "@expo/vector-icons/AntDesign";
import { Text } from "react-native";
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
          <AntDesign name="instagram" size={60} color="white" />
        </RedesSociais>
        <RedesSociais>
          <AntDesign name="linkedin-square" size={60} color="white" />
        </RedesSociais>
        <RedesSociais>
          <AntDesign name="github" size={60} color="white" />
        </RedesSociais>
      </ViewSociais>
    </CentralizarCard>
  );
};

export default Card;
