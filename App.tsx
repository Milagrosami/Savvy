import React from "react";
import { InitialNavigator } from "./src/routes";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return <InitialNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
