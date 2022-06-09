import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import { themeColor } from "../colors";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "react-native";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark";
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: isDark ? themeColor.black : "white",
      }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDark ? themeColor.black : "white",
        },
        tabBarActiveTintColor: isDark ? themeColor.yellow : themeColor.black,
        tabBarInactiveTintColor: isDark
          ? themeColor.greyDark
          : themeColor.greyLight,
        headerStyle: {
          backgroundColor: isDark ? themeColor.black : "white",
        },
        headerTitleStyle: {
          color: isDark ? "white" : themeColor.black,
        },
        tabBarLabelStyle: {
          marginTop: -5,
          fontSize: 10,
          fontWeight: "600",
        },
      }}
    >
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="film-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="TV"
        component={Tv}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="tv-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
