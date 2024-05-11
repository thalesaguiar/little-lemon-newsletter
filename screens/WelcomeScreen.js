import * as React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import BackgroundImg from "../assets/little-lemon-logo.png";
import SubscribeScreen from "./SubscribeScreen";
const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.Container}>
      <View style={styles.WelcomeSectionContainer}>
        <Image source={BackgroundImg} style={styles.Image} />
        <Text style={styles.Title}>
          Little Lemon, your local{"\n"}Mediterranean Bistro
        </Text>
      </View>
      <Pressable
        style={styles.NewsletterButton}
        onPress={() => navigation.navigate(SubscribeScreen)}
      >
        <Text style={styles.ButtonTitle}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  WelcomeSectionContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 100,
  },
  Image: {
    width: 112,
    height: 199,
    marginBottom: 60,
  },
  NewsletterButton: {
    width: "85%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3E524B",
    marginTop: 100,
    marginBottom: 30,
    borderRadius: 10,
  },
  ButtonTitle: {
    color: "#fff",
    fontSize: 18,
  },
  Title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default WelcomeScreen;
