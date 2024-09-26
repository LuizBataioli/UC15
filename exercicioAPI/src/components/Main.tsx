import { View, Text, FlatList } from "react-native";
import { ViewMain } from "../types/StylesMain";
import { useEffect, useState } from "react";
import { RepositoriesDTO } from "../types/Repositories";
import { axiosInstance } from "../utils/axios";
import Card from "./Card";

interface MainProps {
  repositoriesList: RepositoriesDTO[];
}

const Main = ({ repositoriesList }: MainProps) => {

  return (
    <ViewMain>
      <FlatList
        data={repositoriesList}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </ViewMain>
  );
};

export default Main;
