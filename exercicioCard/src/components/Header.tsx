import { Text, View, Image } from "react-native";

interface PostProps {
  imagePerfil: string;
  nome: string;
}

const Header = ({ imagePerfil, nome }: PostProps) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#F2F2F2",
          borderTopLeftRadius: 22,
          borderTopRightRadius: 22,
          padding: 18,
          alignItems: "center",
          height: 55,
        }}
      >
        <Image
          style={{
            marginRight: 15,
            width: 40,
            height: 40,
            borderRadius: 20,
          }}
          source={{ uri: imagePerfil }}
        />
        <Text>{nome}</Text>
      </View>
    </View>
  );
};

export default Header;
