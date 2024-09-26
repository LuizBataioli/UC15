import { Alert, Platform, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  CentralizaInputs,
  Inserir,
  Principal,
  TituloInput,
  Botao,
  CentralizaBotao,
  ViewBotao,
} from "../ts/StylesMain";
import { useState } from "react";
import { useFonts } from "expo-font";
import Footer from "./Footer";

interface IStorage {
  username: String;
  password: String;
}

const Main = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useFonts({
    "Handjet-Bold": require("../assets/fonts/Handjet-Bold.ttf"),
    "Handjet-Medium": require("../assets/fonts/Handjet-Medium.ttf"),
    "Handjet-Regular": require("../assets/fonts/Handjet-Regular.ttf"),
  });

  const btnCadastrar = () => {
    Alert.alert(
      `Atenção ${username}!!!`,
      `O usuário Joãozinho123 ja usa a senha ${password}`,
      [{ text: "OK", onPress: () => console.log("apertou o botão") }]
    );
  };

  const storeData = async () => {
    const jsonValue = JSON.stringify({username, password});
    if(Platform.OS !== "web"){
    try {
      await AsyncStorage.setItem("my-key", jsonValue);
    } catch (e) {
      console.log(e);
    }
  }else{
    localStorage.setItem("@hooks-userInfo", jsonValue)
  }
  };

  return (
    <Principal>
      <CentralizaInputs>
        <TituloInput>Nome:</TituloInput>
        <Inserir onChangeText={setUsername} value={username} />
        <TituloInput>Senha:</TituloInput>
        <Inserir secureTextEntry={true} onChangeText={setPassword} value={password} />
      </CentralizaInputs>
      <Footer storeData={storeData} />
    </Principal>
  );
};

export default Main;
