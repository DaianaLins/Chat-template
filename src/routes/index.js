import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import themes from '../../src/themes';
import { Chat } from '../assets/chat.js';
import { Config } from '../assets/config.js';
import { PerfilC } from "../assets/profile";
import { StatusC } from "../assets/status.js";
import { SettingsContext } from "../context/SettingsContext";
import Conversas from "../pages/Conversations";
import DetailsConversation from "../pages/Conversations/detailsConversations";
import NewContact from "../pages/Conversations/newContact";
import NewConversation from "../pages/Conversations/newConversations";
import Perfil from "../pages/Perfil";
import Settings from "../pages/Settings";
import SignIn from "../pages/SignIn";
import Status from "../pages/Status";

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function Tabs() {
  const { theme, color } = useContext(SettingsContext)

  return (
    <Tab.Navigator initialRouteName="Conversas" screenOptions={{
      tabBarStyle: {
        height: 70,
        paddingBottom: 10,
        paddingTop: 5,
        backgroundColor: themes[theme].background,
      },
      tabBarLabelStyle: {
        color: themes[theme].color
      },
      tabBarIconStyle: {
        color: themes[theme].color
      },
      tabBarActiveTintColor: color,
      tabBarInactiveTintColor: themes[theme].color
    }}>
      <Tab.Screen name="Status" options={{
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => (
          <StatusC focused={focused} color={color} />
        )
      }} component={Status} />
      <Tab.Screen name="Conversas" options={{
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => (
          <Chat focused={focused} color={color} />
        )
      }} component={Conversas} />
      <Tab.Screen name="Perfil" options={{
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => (
          <PerfilC focused={focused} color={color} />
        )
      }} component={Perfil} />
      <Tab.Screen name="Configurações" options={{
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => (
          <Config focused={focused} color={color} />
        )
      }} component={Settings} />
    </Tab.Navigator>
  )
}

export default function Routes() {
  return (
    <NavigationContainer independent={true} >
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chat"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailsConversation"
          component={DetailsConversation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewConversation"
          component={NewConversation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewContact"
          component={NewContact}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

