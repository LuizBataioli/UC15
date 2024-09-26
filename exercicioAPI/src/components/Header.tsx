import { View, Text, TouchableOpacity } from "react-native";
import {
  Botao,
  ImagemPerfil,
  InputSearch,
  Titulo,
  ViewHeader,
  ViewInput,
  ViewTitulo,
} from "../types/StylesHeader";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import Main from "./Main";
import { axiosInstance } from "../utils/axios";
import { RepositoriesDTO } from "../types/Repositories";

const Header = () => {
  interface IStorage {
    search: string;
  }

  const [search, setSearch] = useState<string>("");

  const [repositoriesList, setRepositoriesList] = useState<RepositoriesDTO[]>(
    []
  );

  const getData = async () => {
    // Faz a reqisição
    /*
    // Requisição com fetch
    const response = await fetch(URL);
    const responseFormatted: RepositoryDTO[] = await response.json();
    // Salvar no estado
    setRepositoriesList(responseFormatted);
    console.log(responseFormatted);
    */

    // Requisição com axios com instance
    try {
      const response = await axiosInstance.get<RepositoriesDTO[]>(
        `/users/${search}/repos`
      );

      console.log(response.data);
      setRepositoriesList(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      // Executa algo independente se deu sucesso ou erro
    }
  };

  return (
    <View>
      <ViewHeader>
        <ImagemPerfil
          source={{
            uri:
              repositoriesList[0]?.owner.avatar_url ??
              "https://cdn-icons-png.flaticon.com/512/3736/3736502.png",
          }}
        />
      </ViewHeader>
      <ViewInput>
        <InputSearch onChangeText={setSearch} value={search}></InputSearch>
        <TouchableOpacity onPress={getData}>
          <Botao>
            <MaterialIcons name="search" size={45} color="black" />
          </Botao>
        </TouchableOpacity>
      </ViewInput>
      <ViewTitulo>
        <Titulo>Seus repositórios:</Titulo>
      </ViewTitulo>
      <Main repositoriesList={repositoriesList} />
    </View>
  );
};

export default Header;
