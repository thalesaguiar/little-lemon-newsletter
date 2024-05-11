import * as React from "react";
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import LemonLogo from "../assets/little-lemon-logo-grey.png";
import { validateEmail } from "../utils/index";

const SubscribeScreen = () => {
  const [email, setEmail] = React.useState("");

  const validate = (email) => {
    return validateEmail(email);
  };

  const handleValidation = () => {
    if (validate(email)) {
      Alert.alert("Thanks for subscribing, stay tuned!");
    }
  };

  return (
    <View style={styles.Container}>
      <Image source={LemonLogo} style={styles.Image} />
      <Text style={styles.Title}>
        Subscribe to our newsletter for our
        {"\n"} latest delicious recipes!
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="Type your email"
        textContentType="emailAddress"
      />
      <Pressable
        style={
          validate(email)
            ? styles.NewsletterButton
            : styles.NewsletterDisableButton
        }
        disabled={!validate(email)}
        onPress={handleValidation}
      >
        <Text style={styles.ButtonTitle}>Subscribe</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  Image: {
    width: 100,
    height: 150,
    resizeMode: "contain",
    marginTop: 40,
    marginBottom: 10,
  },
  NewsletterButton: {
    width: "85%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3E524B",
    marginTop: 10,
    marginBottom: 30,
    borderRadius: 10,
  },
  NewsletterDisableButton: {
    width: "85%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B7B7B7",
    marginTop: 10,
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
  input: {
    width: "85%",
    height: 50,
    margin: 30,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
  },
});
export default SubscribeScreen;
