import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { InitialNavigationProps } from "@/types";
import { height, spacing, width } from "../../theme";

const Onboarding = ({ navigation }: InitialNavigationProps<"Onboarding">) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/onboarding.png")}
        style={{
          width: width * 0.6,
          height: height * 0.5,
          margin: height * 0.05,
        }}
      />
      <Text
        style={{
          fontSize: spacing.xl,
          fontWeight: "900",
          textAlign: "center",
          margin: spacing.xs,
        }}>
        TAKE <Text style={{ color: "#ffa31a" }}>CONTROL</Text> {"\n"}OF YOUR{" "}
        <Text style={{ color: "#80bfff" }}>FAINANCE</Text>
      </Text>
      <Text
        style={{
          fontSize: spacing.s,
          textAlign: "center",
          color: "#d0d0d0",
        }}>
        Effortlessly budget, save and spend {"\n"}wisely with our all-in-one app
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}>
        <Text style={styles.text}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Onboarding;

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
