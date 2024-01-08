import { View, Text, Image, StyleSheet, Button, Pressable } from "react-native";
const Pot = require("../assets/pott.png");
const star = require("../assets/Star.png");
const star2 = require("../assets/Star2.png");

function Cart({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Image source={Pot} />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <Text style={styles.text}>Potatoes</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 40,
          }}
        >
          <Image source={star} />
          <Image source={star} />
          <Image source={star} />
          <Image source={star} />
          <Image source={star2} />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={styles.text2}>#10,000</Text>
        <View style={{ flexDirection: "row", marginLeft: 130 }}>
          <View style={styles.plus}>
            <Text style={styles.boxText4}>-</Text>
          </View>
          <Text style={styles.text2}>02</Text>
          <View style={styles.plus}>
            <Text style={styles.boxText4}>+</Text>
          </View>
        </View>
      </View>
      <Text style={styles.text3}>Description</Text>
      <Text style={styles.text4}>
        Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
        fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
        elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
        lectus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
        egestas, ac scelerisque ante pulvinar.
      </Text>
      <View style={styles.button}>
        <Button title="Purchase" onPress={() => navigation.navigate("Check")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  text: {
    flexWrap: "wrap",
    fontSize: 48,
    paddingHorizontal: 20,

    color: "black",
    fontFamily: "DM Sans",
    textTransform: "capitalize",
    fontStyle: "normal",
    fontWeight: 900,
    lineHeight: "normal",
  },
  text3: {
    flexWrap: "wrap",
    fontSize: 24,
    paddingHorizontal: 20,
    marginTop: 15,
    color: "black",
    fontFamily: "DM Sans",
    textTransform: "capitalize",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
  plus: {
    backgroundColor: "#ECB128",
    borderRadius: 20,

    width: 22,
  },
  boxText4: {
    fontSize: 20,
    fontWeight: 400,
    alignSelf: "center",
    justifyContent: "center",
  },
  text4: {
    flexWrap: "wrap",
    fontSize: 14,
    paddingHorizontal: 20,
    marginTop: 12,
    marginBottom: 15,
    color: "black",
    fontFamily: "DM Sans",
    textTransform: "capitalize",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
  text2: {
    flexWrap: "wrap",
    fontSize: 24,
    paddingHorizontal: 20,

    color: "#ECB128",
    fontFamily: "DM Sans",
    textTransform: "capitalize",
    fontStyle: "normal",
    fontWeight: 900,
    lineHeight: "normal",
  },
  button: {
    padding: 8,
    backgroundColor: "#ECB128",
    borderRadius: "16px",
    margin: 10,
  },
  background: {
    display: "flex",
    width: "390px",
    height: "47px",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    backgroundColor: "#ECB128",
  },
});

export default Cart;
