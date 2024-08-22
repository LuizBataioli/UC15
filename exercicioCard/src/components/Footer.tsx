import { Text, View, TouchableOpacity } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";

const Like = () => {
  alert("Você curtiu essa foto");
};
const Comment = () => {
  alert("Vcoê comentou na foto");
};
const Share = () => {
  alert("Você compartilhou essa foto");
};

interface PostProps {
  description: string;
}

const Footer = ({ description }: PostProps) => {
  return (
    //view principal
    <View
      style={{
        backgroundColor: "#F2F2F2",
        borderBottomLeftRadius: 22,
        borderBottomRightRadius: 22,
      }}
    >
      {/*View descrição*/}
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Text>{description}</Text>
      </View>
      {/*View botões*/}
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 12,
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity onPress={Like}>
          <EvilIcons name="like" size={35} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={Comment}>
          <EvilIcons name="comment" size={35} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={Share}>
          <EvilIcons name="share-apple" size={35} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;
