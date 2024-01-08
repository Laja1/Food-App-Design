import { View, Text, Button, StyleSheet, Image } from "react-native";
const tom = require("../assets/tomato.jpg");
const pot = require("../assets/potato.jpg");
const car = require("../assets/car.jpg");
function Check({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.button2}>
          <Text>All(3)</Text>
        </View>
        <View style={styles.button4}>
          <Text>Processing</Text>
        </View>
        <View style={styles.button3}>
          <Text>Pending</Text>
        </View>
        <View style={styles.button3}>
          <Text>Cancelled</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Image style={styles.image} source={pot} />
        <View style={{ flexDirection: "column", alignSelf: "center" }}>
          <Text style={styles.price}>Potatoes</Text>
          <Text style={styles.price2}>#5,000</Text>
        </View>
        <View style={{ flexDirection: "row", marginLeft: 20 }}>
          <View style={styles.plus}>
            <Text style={styles.boxText4}>-</Text>
          </View>
          <Text style={styles.text2}>02</Text>
          <View style={styles.plus}>
            <Text style={styles.boxText4}>+</Text>
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <Image style={styles.image} source={tom} />
        <View style={{ flexDirection: "column", alignSelf: "center" }}>
          <Text style={styles.price}>Tomatoes</Text>
          <Text style={styles.price2}>#6,000</Text>
        </View>
        <View style={{ flexDirection: "row", marginLeft: 20 }}>
          <View style={styles.plus}>
            <Text style={styles.boxText4}>-</Text>
          </View>
          <Text style={styles.text2}>01</Text>
          <View style={styles.plus}>
            <Text style={styles.boxText4}>+</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Image style={styles.image} source={car} />
        <View style={{ flexDirection: "column", alignSelf: "center" }}>
          <Text style={styles.price}>Carrot</Text>
          <Text style={styles.price2}>#3,000</Text>
        </View>
        <View style={{ flexDirection: "row", marginLeft: 45 }}>
          <View style={styles.plus}>
            <Text style={styles.boxText4}>-</Text>
          </View>
          <Text style={styles.text2}>02</Text>
          <View style={styles.plus}>
            <Text style={styles.boxText4}>+</Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.total}>Subtotal</Text>
        <Text style={styles.total2}>#22,000</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.total}>Delivery</Text>
        <Text style={styles.total2}>#3000</Text>
      </View>
      <Text style={{ paddingHorizontal: 20 }}>
        _______________________________________________
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.total}>Total</Text>
        <Text style={styles.total2}>#25,000</Text>
      </View>
      <View style={styles.button}>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate("Shopping")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
  },
  card: {
    width: 360,
    height: 108,
    margin: 3,

    marginHorizontal: 20,
    borderWidth: 2,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "333",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    flexDirection: "row",
    borderRadius: 16,
  },
  total2: {
    alignSelf: "center",
    paddingHorizontal: 20,
    fontSize: 16,
  },
  price: {
    fontFamily: "DM Sans",
    fontSize: 24,
    textTransform: "capitalize",
    fontStyle: "normal",
    fontWeight: 900,
    marginLeft: 5,
    lineHeight: "normal",
  },
  price2: {
    fontFamily: "DM Sans",
    fontSize: 16,
    marginLeft: 10,
    textTransform: "capitalize",
    fontStyle: "normal",
    fontWeight: 900,
    lineHeight: "normal",
  },
  total: {
    fontFamily: "DM Sans",
    fontSize: 24,
    marginLeft: 10,
    textTransform: "capitalize",
    fontStyle: "normal",
    fontWeight: 500,
    paddingHorizontal: 20,
    paddingBottom: 0,
    paddingTop: 5,
    lineHeight: "normal",
  },
  text2: {
    flexWrap: "wrap",
    fontSize: 24,
    paddingHorizontal: 20,
    alignSelf: "center",
    color: "#ECB128",
    fontFamily: "DM Sans",
    textTransform: "capitalize",
    fontStyle: "normal",
    fontWeight: 900,
    lineHeight: "normal",
  },
  image: {
    width: 96,
    borderRadius: 96,
    height: 96,
  },
  plus: {
    backgroundColor: "#ECB128",
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    marginLeft: 0,
  },
  boxText4: {
    fontSize: 20,
    fontWeight: 400,
    alignSelf: "center",
    color: "black",
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
    color: "black",
    fontFamily: "DM Sans",
    fontSize: 48,
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
  button3: {
    width: 100,
    fontSize: 10,
    borderWidth: 0.5,
    backgroundColor: "white",
    borderColor: "#ECB128",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 32,

    borderRadius: 50,
  },
  button4: {
    width: 90,
    fontSize: 10,
    borderWidth: 0.5,
    backgroundColor: "white",
    borderColor: "#ECB128",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 32,

    borderRadius: 50,
  },

  button: {
    padding: 8,
    backgroundColor: "#ECB128",
    borderRadius: "16px",
    margin: 10,
  },
  row: {
    flexDirection: "row",
    marginLeft: 10,
    marginTop: -40,
    marginBottom: 20,
    gap: "2px",
  },
  button2: {
    backgroundColor: "#ECB128",
    width: 80,
    fontSize: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 32,

    borderRadius: 50,
  },
});

export default Check;
