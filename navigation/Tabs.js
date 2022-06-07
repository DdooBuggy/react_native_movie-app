import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import Movies from "./screens/Movies";
import Tv from "./screens/Tv";
import Search from "./screens/Search";

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarStyle: { backgroundColor: "tomato" },
      tabBarActiveTintColor: "red",
      tabBarInactiveTintColor: "purple",
      headerTitleStyle: { color: "tomato" },
      headerRight: () => (
        <View>
          <Text>Hello</Text>
        </View>
      ),
    }}
  >
    <Tab.Screen name="Movies" component={Movies} />
    <Tab.Screen name="Tv" component={Tv} />
    <Tab.Screen name="Search" component={Search} />
  </Tab.Navigator>
);

export default Tabs;