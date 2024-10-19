import React from "react";
import { Text, FlatList } from "react-native";
import repositories from "../data/repositories";
import RepositoryItem from "./RepositoryItem";
const RepositoryList = () => {
  return (
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
