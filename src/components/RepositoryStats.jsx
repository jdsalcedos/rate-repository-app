import React from "react";
import { View } from "react-native";
import StyledText from "./StyledText";

const parseThousands = (value) => {
  return value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value);
};

const RepositoryStats = (props) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <View>
        <StyledText align="center" fontWeight="bold">
          Email:
        </StyledText>
        <StyledText align="center">{props.email}</StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          Phone:
        </StyledText>
        <StyledText align="center">{props.phone}</StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          Salary:
        </StyledText>
        <StyledText align="center">{parseThousands(props.salary)}</StyledText>
      </View>
    </View>
  );
};

export default RepositoryStats;
