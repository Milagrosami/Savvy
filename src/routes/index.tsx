import {
  About,
  Account,
  Delete,
  Home,
  Login,
  More,
  Onboarding,
  Profile,
  Register,
  Setting,
  Transaction,
} from "../screens";
import { DrawerRoutes, HomeRoutes, InitialRoutes, TabRoutes } from "../types";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { StyleSheet, Image } from "react-native";
import { height, width } from "../theme";
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from "@react-navigation/drawer";

const InitialStack = createStackNavigator<InitialRoutes>();
const HomeStack = createStackNavigator<HomeRoutes>();
const Tab = createBottomTabNavigator<TabRoutes>();
const Drawer = createDrawerNavigator<DrawerRoutes>();

const DrawerNavigator = () => (
  <Drawer.Navigator
    backBehavior="history"
    screenOptions={{
      title: "",
      drawerActiveBackgroundColor: "transparent",
      overlayColor: "rgba(230, 242, 255,0.3)",
      headerStyle: {
        elevation: 0,
      },
      drawerContentContainerStyle: {
        marginTop: width * 0.3,
      },
      drawerLabelStyle: {
        textAlign: "justify",
      },
      drawerStyle: {
        width: width * 0.6,
        borderTopEndRadius: 29,
        borderBottomEndRadius: 29,
      },
    }}>
    <Drawer.Screen
      name="TabNavigator"
      component={TabNavigator}
      options={{ drawerLabel: "Home" }}
    />
    <Drawer.Screen
      name="Setting"
      component={Setting}
      options={{
        title: "Settings",
        drawerLabel: "Setting",
      }}
    />
    <Drawer.Screen
      name="About"
      component={About}
      options={{
        title: "About",
        drawerLabel: "About",
      }}
    />
    <Drawer.Screen
      name="More"
      component={More}
      options={{
        title: "More",
        drawerLabel: "More",
      }}
    />
    <Drawer.Screen
      name="Delete"
      component={Delete}
      options={{
        title: "Delete",
        drawerLabel: "Delete my data",
      }}
    />
  </Drawer.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator
    backBehavior="history"
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarBadgeStyle: {
        backgroundColor: "red",
      },
      tabBarStyle: {
        alignSelf: "center",
        width: width,
        paddingBottom: height * 0.03,
        paddingHorizontal: width * 0.09,
        elevation: 0,
        borderColor: "transparent",
      },
    }}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ size, focused }) => (
          <Ionicons
            name={focused ? "home-sharp" : "home-outline"}
            size={size - 5}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={Account}
      options={{
        tabBarIcon: ({ size, focused }) => (
          <Ionicons name={focused ? "grid" : "grid-outline"} size={size - 5} />
        ),
      }}
    />
    <Tab.Screen
      name="Transaction"
      component={Transaction}
      options={{
        tabBarIcon: ({ size, focused }) => (
          <MaterialIcons
            name={focused ? "insert-chart" : "insert-chart-outlined"}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({ size, focused }) => (
          <Ionicons
            name={focused ? "ios-person" : "person-outline"}
            size={size - 5}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

const HomeNavigator = () => (
  <HomeStack.Navigator screenOptions={{ headerShown: false }}>
    <HomeStack.Screen name="DrawerNavigator" component={DrawerNavigator} />
    <HomeStack.Screen name="TabNavigator" component={TabNavigator} />
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
      <InitialStack.Screen name="HomeNavigator" component={HomeNavigator} />
    </InitialStack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({});
