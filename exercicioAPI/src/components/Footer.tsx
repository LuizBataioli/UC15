import { View, Text } from "react-native";
import { TextFooter, ViewFooter } from "../types/StylesFooter";
import { Owner, RepositoriesDTO } from "../types/Repositories";

interface FooterProps {
  nome: Owner;
}

const Footer = ({ nome }: FooterProps) => {
  return (
    <ViewFooter>
      {/*<TextFooter>{nome.login}</TextFooter>*/}
    </ViewFooter>
  );
};

export default Footer;
