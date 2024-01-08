import { View, Text, ImageBackground, StyleSheet, Button } from "react-native";
const homeImg = require("../assets/home.png");
function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={homeImg}>
        <Text style={styles.text}>Re-stock</Text>
        <Text style={styles.texts}>
          Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </Text>
        <View style={styles.button}>
          <Button
            title="Get Started"
            onPress={() => navigation.navigate("Shopping")}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    height: 854,
  },
  texts: {
    color: "#fff",

    fontFamily: "DM Sans",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
    paddingHorizontal: 20,
    lineHeight: "normal",
  },
  text: {
    paddingHorizontal: 20,
    marginTop: 560,
    color: "#fff",
    fontFamily: "DM Sans",
    fontSize: 48,
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
  button: {
    padding: 8,
    backgroundColor: "#ECB128",
    borderRadius: "16px",
    margin: 10,
  },
});

export default Home;
