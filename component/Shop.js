import { View, Text, Image, StyleSheet, TextInput, Button } from "react-native";
import { BellOutlined } from "@ant-design/icons";
const Pot = require("../assets/potato.jpg");
const Cab = require("../assets/Cab.jpg");
const car = require("../assets/car.jpg");
import { IeCircleFilled } from "@ant-design/icons";
const tomato = require("../assets/tomato.jpg");
import Ionicons from "@expo/vector-icons/Ionicons";
function Shop({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Easy ordering and fast</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.text2}>checkout</Text>

        <Ionicons
          style={{ paddingHorizontal: 20, marginBottom: 10 }}
          name="notifications-outline"
          size={30}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Search for Your Market Supplies"
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.text2}>Catergories</Text>

        <Text
          style={{
            paddingHorizontal: 20,
            marginBottom: 10,
            alignSelf: "center",
            color: "#ECB128",
          }}
        >
          See all
        </Text>
      </View>
      <View style={styles.row}>
        <View style={styles.button2}>
          <Text>Vegetables</Text>
        </View>
        <View style={styles.button4}>
          <Text>Frozen Food</Text>
        </View>
        <View style={styles.button3}>
          <Text>Meat</Text>
        </View>
        <View style={styles.button3}>
          <Text>Fish</Text>
        </View>
      </View>
      <View style={styles.side}>
        <View style={styles.combo}>
          <View style={styles.card}>
            <Image style={styles.image} source={Pot} />

            <View style={styles.box}>
              <Text style={styles.boxText}>Potatoes</Text>
              <Text style={styles.boxText2}>Available in Baskets</Text>
              <View style={styles.group}>
                <Text style={styles.boxText3}>#5000</Text>
                <View style={styles.plus}>
                  <Text style={styles.boxText4}>+</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.combo}>
          <View style={styles.card}>
            <Image style={styles.image} source={Cab} />

            <View style={styles.box}>
              <Text style={styles.boxText}>Potatoes</Text>
              <Text style={styles.boxText2}>Available in Baskets</Text>
              <View style={styles.group}>
                <Text style={styles.boxText3}>#5000</Text>
                <View style={styles.plus}>
                  <Text style={styles.boxText4}>+</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.pad}>
        <View style={styles.side}>
          <View style={styles.combo}>
            <View style={styles.card}>
              <Image style={styles.image} source={tomato} />

              <View style={styles.box}>
                <Text style={styles.boxText}>Potatoes</Text>
                <Text style={styles.boxText2}>Available in Baskets</Text>
                <View style={styles.group}>
                  <Text style={styles.boxText3}>#5000</Text>
                  <View style={styles.plus}>
                    <Text style={styles.boxText4}>+</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.combo}>
            <View style={styles.card}>
              <Image style={styles.image} source={car} />

              <View style={styles.box}>
                <Text style={styles.boxText}>Potatoes</Text>
                <Text style={styles.boxText2}>Available in Baskets</Text>
                <View style={styles.group}>
                  <Text style={styles.boxText3}>#5000</Text>
                  <View style={styles.plus}>
                    <Text style={styles.boxText4}>+</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: 180,
    height: 240,
    borderRadius: 18,
  },
  card: {
    paddingHorizontal: 5,
  },
  button2: {
    backgroundColor: "#ECB128",
    width: 115,
    fontSize: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 32,

    borderRadius: 50,
  },
  button4: {
    backgroundColor: "white",
    borderColor: "#ECB128",
    borderWidth: 0.5,
    width: 115,
    fontSize: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 32,

    borderRadius: 50,
  },
  button3: {
    backgroundColor: "white",
    borderColor: "#ECB128",
    borderWidth: 0.5,
    width: 70,
    fontSize: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 32,

    borderRadius: 50,
  },

  row: {
    flexDirection: "row",
    marginLeft: 10,
    marginBottom: 10,
    gap: "2px",
  },
  box: {
    backgroundColor: "white",
    borderRadius: 15,
    borderWidth: 2,
    height: 81,
    marginTop: -81,
    width: 180,
    shadowRadius: 20,
    shadowOpacity: 0.6,

    justifyContent: "center",
    flexShrink: 0,
    borderColor: "white",
  },
  pad: { marginTop: 20 },
  group: {
    marginLeft: 70,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  plus: {
    backgroundColor: "#ECB128",
    borderRadius: 20,
    padding: "5",
    width: 22,
  },
  side: {
    justifyContent: "center",
    flexDirection: "row",
  },
  boxText: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: 600,
  },
  boxText2: {
    alignSelf: "center",
    fontSize: 12,
    fontWeight: 400,
  },
  boxText3: {
    alignSelf: "center",
    fontSize: 14,
    fontWeight: 400,
  },
  boxText4: {
    fontSize: 20,
    fontWeight: 400,
    alignSelf: "center",
    justifyContent: "center",
  },
  input: {
    height: 30,

    borderColor: "#ddd",
    alignSelf: "center",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    width: 350,
    borderRadius: 5,
  },
  text: {
    flexWrap: "wrap",
    fontSize: 24,
    paddingHorizontal: 20,
    marginTop: 60,
    color: "black",
    fontFamily: "DM Sans",
    textTransform: "capitalize",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
  text2: {
    flexWrap: "wrap",
    fontSize: 24,
    paddingHorizontal: 20,
    marginBottom: 10,
    color: "black",
    fontFamily: "DM Sans",
    textTransform: "capitalize",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
  button: {
    padding: 8,
    backgroundColor: "#3498db",
    borderRadius: 5,
    margin: 10,
  },
});

export default Shop;
