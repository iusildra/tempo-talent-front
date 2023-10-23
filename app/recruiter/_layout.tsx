import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { useColorScheme } from "react-native";

import Colors from "../../constants/Colors";

interface TarBarIconProps {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}

const TabBarIcon: React.FC<TarBarIconProps> = (props) => (
  <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />
);

const Home = () => (
  <Link href="/recruiter">
    <FontAwesome name="home" size={24} color="white" />
  </Link>
);

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerLeftContainerStyle: { paddingLeft: 10 },
        headerRightContainerStyle: { paddingRight: 20 },
        headerRight: Home,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: (props) => TabBarIcon({ name: "home", ...props }),
        }}
      />
      <Tabs.Screen
        name="companies"
        options={{
          title: "Companies",
          tabBarIcon: (props) => TabBarIcon({ name: "search", ...props }),
        }}
      />
      <Tabs.Screen
        name="subscriptions"
        options={{
          title: "Subscriptions",
          tabBarIcon: (props) => TabBarIcon({ name: "link", ...props }),
        }}
      />
    </Tabs>
  );
}
