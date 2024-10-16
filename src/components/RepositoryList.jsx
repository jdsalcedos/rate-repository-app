import React from "react";
import { View, Text, FlatList } from "react-native";
import repositories from "../data/repositories";

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      renderItem={({ item: repo }) => (
        <View key={repo.id}>
          <Text>{repo.id}</Text>
          <Text>{repo.nombre}</Text>
          <Text>{repo.email}</Text>
          <Text>{repo.phone}</Text>
        </View>
      )}
    />
  );
};

export default RepositoryList;
