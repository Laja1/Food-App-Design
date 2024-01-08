import { View, Text, Image, StyleSheet, Button } from "react-native";
import { HomeOutlined } from "@ant-design/icons";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ProfileOutlined } from "@ant-design/icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Shop from "./Shop";
import Check from "./Check";
import Cart from "./Cart";
import UserProfile from "./Profile";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Shopping({ navigation }) {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveBackgroundColor: "#ECB128",
          tabBarInactiveBackgroundColor: "#ECB128",
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Shop"
          component={Shop}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () => <Ionicons name="home-outline" size={20} />,
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () => <Ionicons name="cart-outline" size={20} />,
          }}
        />
        {/* <Tab.Screen
          name="Profile"
          component={UserProfile}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () => <Ionicons name="cart-outline" size={20} />,
          }}
        /> */}
        <Tab.Screen
          name="My Orders"
          component={Check}
          options={{
            tabBarShowLabel: false,
            headerShown: true,
            tabBarIcon: () => <Ionicons name="card-outline" size={20} />,
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

// export const Main = ({ navigation }) => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Check" component={Check} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    color: "black",
  },
  img: {
    marginTop: 150,
    alignSelf: "center",
  },
  text: {
    flexWrap: "wrap",
    fontSize: 24,
    paddingHorizontal: 20,

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

export default Shopping;
