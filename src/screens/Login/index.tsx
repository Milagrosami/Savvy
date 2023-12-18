import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { InitialNavigationProps } from "@/types";
import { height, spacing, width } from "../../theme";

const Login = ({ navigation }: InitialNavigationProps<"Login">) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("HomeNavigator")}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Register")}>
        <Text style={styles.text}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  text: {
    color: "white",
  },
  button: {
    alignItems: "center",
    backgroundColor: "black",
    padding: 20,
    width: width * 0.4,
    height: height * 0.075,
    borderRadius: 29,
    margin: spacing.m,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
});
