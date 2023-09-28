import { StyleSheet, Image } from "react-native";

import { Text, View } from "../../components/Themed";
import { useState } from "react";
import { TextInput, Button } from "react-native-paper";

export default function Home() {
  const [keywords, setKeywords] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const firstName = "John";
  const lastName = "Doe";

  return (
    <View style={styles.container}>
      <Text style={styles.title1}>Temporary job search</Text>
      <Image
        source={{
          uri: "https://media.licdn.com/dms/image/D4E03AQHbr1KbFhG1cQ/profile-displayphoto-shrink_800_800/0/1665162341640?e=1701302400&v=beta&t=DdcjuKNnoH1hb78nJP_RTIcPArBUlL4qclh-7LOn-kE",
        }}
        style={styles.homePicture}
      />
      <Text style={styles.title2}>
        {firstName} {lastName}
      </Text>

      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <Text style={styles.label}>Jobs, Company, Keywords...</Text>
      <TextInput
        label="Keywords"
        value={keywords}
        onChangeText={setKeywords}
        mode="outlined"
        right={<TextInput.Icon icon="magnify" />}
      />
      <Text style={styles.label}>Location</Text>
      <TextInput
        label="Location"
        value={location}
        onChangeText={setLocation}
        mode="outlined"
        right={<TextInput.Icon icon="crosshairs-gps" />}
      />
      <Button
        icon="magnify"
        mode="contained"
        style={styles.button}
        onPress={() => console.log("Pressed")}
      >
        Press me
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title1: {
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 24,
  },
  title2: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 12,
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 2,
  },
  separator: {
    marginVertical: 12,
    height: 4,
    width: "80%",
  },
  homePicture: {
    width: 128,
    height: 128,
    borderRadius: 64,
  },
  button: {
    marginTop: 12,
  },
});
