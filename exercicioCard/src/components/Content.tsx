import { View, Image } from "react-native";

interface PostProps {
  imageContent: string;
}

const Content = ({ imageContent }: PostProps) => {
  return (
    <View
      style={{ alignItems: "center", justifyContent: "center", width: "100%" }}
    >
      <Image
        style={{
          width: 350,
          height: 350,
        }}
        source={{ uri: imageContent }}
      />
    </View>
  );
};

export default Content;
