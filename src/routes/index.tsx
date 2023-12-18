import {
  Account,
  Home,
  Login,
  Onboarding,
  Profile,
  Register,
  Transaction,
} from "../screens";
import {
  HomeRoutes,
  InitialRoutes,
  TabBarComponentProps,
  TabRoutes,
} from "../types";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Animated,
  Pressable,
} from "react-native";
import { useEffect, useRef } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LayoutChangeEvent } from "react-native/Libraries/Types/CoreEventTypes";

const InitialStack = createStackNavigator<InitialRoutes>();
const HomeStack = createStackNavigator<HomeRoutes>();
const Tab = createBottomTabNavigator<TabRoutes>();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{ headerShown: false }}
    // tabBar={(props) => <MyTabBar {...props} />}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ size, focused }) => (
          <Ionicons name="home" color="#102641" size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={Account}
      options={{
        tabBarIcon: ({ size, focused }) => (
          <MaterialCommunityIcons name="gavel" size={size} color="#102641" />
        ),
      }}
    />
    <Tab.Screen
      name="Transaction"
      component={Transaction}
      options={{
        tabBarIcon: ({ size, focused }) => (
          <Ionicons name="add-circle" color="#102641" size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({ size, focused }) => (
          <Ionicons name="person-circle" color="#102641" size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

const HomeNavigator = () => (
  <HomeStack.Navigator screenOptions={{ headerShown: false }}>
    <HomeStack.Screen name="TabNavigator" component={TabNavigator} />
    {/* <HomeStack.Screen name="Search" component={Search} /> */}
  </HomeStack.Navigator>
);

export const InitialNavigator = () => (
  <NavigationContainer>
    <InitialStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <InitialStack.Screen name="Onboarding" component={Onboarding} />
      <InitialStack.Screen name="Login" component={Login} />
      <InitialStack.Screen name="Register" component={Register} />
      <InitialStack.Screen name="HomeNavigator" component={Home} />
    </InitialStack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#e2e2e2",
  },
  activeBackground: {
    position: "absolute",
  },
  tabBarContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    // padding: spacing.xs,
  },
  component: {
    height: 60,
    width: 60,
    marginTop: -5,
  },
  componentCircle: {
    flex: 1,
    borderRadius: 30,
    backgroundColor: "#e2e2e2",
  },
  iconContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: 46,
    width: 46,
  },
});
