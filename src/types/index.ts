import {
    BottomTabNavigationOptions,
    BottomTabNavigationProp,
  } from "@react-navigation/bottom-tabs";
  import { DrawerNavigationProp} from '@react-navigation/drawer';
  import { RouteProp } from "@react-navigation/native";
  import { StackNavigationProp } from "@react-navigation/stack";
  import { LayoutChangeEvent } from "react-native";
  
  export type InitialRoutes = {
    Onboarding: undefined;
    Login: undefined;
    Register: undefined;
    HomeNavigator: undefined;
  };
  
  export type HomeRoutes = {
    TabNavigator: undefined;
    DrawerNavigator: undefined;
  };
  export type DrawerRoutes = {
    Setting: undefined;
    About: undefined;
    More: undefined;
    Delete: undefined;
  }
  export type TabRoutes = {
    Home: undefined;
    Account: undefined;
    Transaction: undefined;
    Profile: undefined;
  };
  
  export interface InitialNavigationProps<RouteName extends keyof InitialRoutes> {
    navigation: StackNavigationProp<InitialRoutes, RouteName>;
    route: RouteProp<InitialRoutes, RouteName>;
  }
  
  export interface HomeNavigationProps<RouteName extends keyof HomeRoutes> {
    navigation: StackNavigationProp<HomeRoutes, RouteName>;
    route: RouteProp<HomeRoutes, RouteName>;
  }
  
  export interface TabNavigationProps<RouteName extends keyof TabRoutes> {
    navigation: BottomTabNavigationProp<TabRoutes, RouteName>;
    route: RouteProp<TabRoutes, RouteName>;
  }
  export interface DrawerNavigationProps<RouteName extends keyof DrawerRoutes> {
    navigation: DrawerNavigationProp<DrawerRoutes, RouteName>;
    route: RouteProp<DrawerRoutes, RouteName>;
  }
  
  export type TabBarComponentProps = {
    active?: boolean;
    options: BottomTabNavigationOptions;
    onLayout: (e: LayoutChangeEvent) => void;
    onPress: () => void;
  };