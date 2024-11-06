import { Image, View, StyleSheet } from "react-native";
import React from "react";
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";

const RepositoryItemHeader = ({
  ownerAvatarUrl,
  fullName,
  description,
  language,
}) => (
  <View style={{ flexDirection: "row", paddingBottom: 2 }}>
    <View style={{ paddingRight: 10 }}>
      <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
    </View>
    {/* ocupe todo el espacio que pueda y que haga un salto de linea en caso de que no quepa */}
    <View style={{ flex: 1, justifyContent: "center" }}>
      <StyledText fontWeight="bold">{fullName}</StyledText>
      <StyledText color="secondary">{description}</StyledText>
      <StyledText style={styles.language}>{language}</StyledText>
    </View>
  </View>
);

const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <RepositoryItemHeader {...props} />
    <RepositoryStats {...props} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 5,
    // paddingBottom: 5,
    // paddingTop: 5,
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start", //para que el color no vaya hasta el fondo sino que ocupe el espacio que necesita
    borderRadius: 4,
    //overflow: "hidden", puede que no aparezca el borderRadius, por lo que ahi se usa este
    marginVertical: 4, //lo mismo que poner marginBottom y marginTop
  },
  image: {
    //siempre toca estilar las imagenes ya que toca poner cuanto va a ocupar
    width: 48,
    height: 48,
    borderRadius: 4,
  },
});
export default RepositoryItem;
