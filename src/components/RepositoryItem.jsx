import { View, Text, StyleSheet } from "react-native";
import React from "react";
import StyledText from "./StyledText";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
});

const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <StyledText fontSize="subheading" fontWeight="bold">
      {props.nombre}
    </StyledText>
    <StyledText>{props.email}</StyledText>
    <StyledText>{props.phone}</StyledText>
  </View>
);
export default RepositoryItem;
