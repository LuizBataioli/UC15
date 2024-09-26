import { View, Text } from "react-native";
import { RepositoriesDTO } from "../types/Repositories";
import { TextoCard, ViewCard } from "../types/StylesCard";

interface CardProps {
  item: RepositoriesDTO;
}

const Card = ({ item }: CardProps) => {
  return (
    <ViewCard>
      <TextoCard>Repositório: {item.name}</TextoCard>
      <TextoCard>Linguagem: {item.language ?? "Não definida"}</TextoCard>
    </ViewCard>
  );
};

export default Card;
