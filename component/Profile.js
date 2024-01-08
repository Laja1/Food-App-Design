import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Image,
  Button,
} from "react-native";

function UserProfile({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title="Register" onPress={() => navigation.navigate("Login")} />
      </View>
      <View style={styles.press}>
        <Pressable
          style={styles.text}
          onPress={() => navigation.navigate("Login")}
        />
        <Text style={styles.text}>Already a member? Sign in</Text>
        {/* <Text>n</Text> */}
        <Pressable />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {},
  img: {
    marginTop: 150,
    alignSelf: "center",
  },
  tex: {
    color: "black",
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
  },
  const: {
    paddingTop: 50,
    margin: 15,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  text: {
    margin: 10,
    alignSelf: "center",
    fontSize: 16,
  },
  press: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    padding: 8,
    backgroundColor: "#3498db",
    borderRadius: 5,
    margin: 10,
  },
});

export default UserProfile;
