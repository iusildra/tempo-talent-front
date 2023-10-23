import styles from "../styles/styles";
import React from "react";
import { View } from "./Themed";
import { TextInput, Button } from "react-native-paper";
import { StyleSheet } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

interface CompanySearchProps {
  search: (keywords: string, location: string) => void;
}

const CompanySearch: React.FC<CompanySearchProps> = ({ search }) => {
  const params = useLocalSearchParams<{ keywords?: string; location?: string }>();
  const [keywords, setKeywords] = React.useState<string>(params.keywords ?? "");
  const [location, setLocation] = React.useState<string>(params.location ?? "");

  React.useEffect(() => {
    setKeywords(params.keywords ?? "")
    setLocation(params.location ?? "")
  }, [params]);

  return (
    <View>
      <View style={formStyles.form}>
        <TextInput
          label="Keywords"
          value={keywords}
          onChangeText={(search) => {
            setKeywords(search);
            router.setParams({ keywords: search });
          }}
          mode="outlined"
          right={<TextInput.Icon icon="magnify" />}
          style={formStyles.input}
        />
        <TextInput
          label="Location"
          value={location}
          onChangeText={(search) => {
            setLocation(search);
            router.setParams({ location: search });
          }}
          mode="outlined"
          right={<TextInput.Icon icon="crosshairs-gps" />}
          style={formStyles.input}
        />
      </View>
      <Button
        icon="magnify"
        mode="contained"
        style={styles.button}
        onPress={() => search(keywords, location)}
      >
        Search
      </Button>
    </View>
  );
};

const formStyles = StyleSheet.create({
  form: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    marginHorizontal: 10,
  },
});

export default CompanySearch;
