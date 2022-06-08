import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Movies = ({ navigation: { navigate } }) => (
  <TouchableOpacity
    onPress={() => navigate("Stack", { screen: "One" })}
    style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
  >
    <Text>Movies</Text>
  </TouchableOpacity>
);

export default Movies;
