import React from "react";
import { Text, FlatList } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";

const RepositoryList = () => {
  //especie de 'caja negra', que el componente no sepa la logica de los datos
  const { repositories } = useRepositories();

  return (
    // para renderizar datos, haciendo un loop que contiene elementos con datos
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={(
        { item: repo } //se cambia el nombre de 'item' a repo
      ) => <RepositoryItem {...repo} />}
    />
  );
};

export default RepositoryList;
