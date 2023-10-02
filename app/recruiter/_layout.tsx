import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { TouchableOpacity, useColorScheme } from "react-native";

import Colors from "../../constants/Colors";

interface TarBarIconProps {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}

const TabBarIcon: React.FC<TarBarIconProps> = (props) => (
  <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />
);

const Logo = () => (
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
        headerRight: Logo,
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
        name="search"
        options={{
          title: "Search",
          tabBarIcon: (props) => TabBarIcon({ name: "search", ...props }),
        }}
      />
    </Tabs>
  );
}
