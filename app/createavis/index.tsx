import { StyleSheet, Image } from "react-native";

import { Text, View } from "../../components/Themed";
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from "react";
import { TextInput, Button } from "react-native-paper";

export default function Home(props: { candidatename: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; offername: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) {
  const [note, setNote] = useState<string>("");
  const [avis, setAvis] = useState<string>("");
  

  return (
    <View style={styles.container}>
      
      
      
      
      

      
      <Text>{props.candidatename}</Text>
      <Text>{props.offername}</Text>

      
      <TextInput
        label="Note"
        value={note}
        onChangeText={setNote}
        mode="outlined"
        
      />
      <TextInput
        label="Avis"
        value={avis}
        onChangeText={setAvis}
        mode="outlined"
        
      />
      
      <Button
        
        mode="contained"
        style={styles.button}
        onPress={() => console.log("Pressed")}
      >
        Créer
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
    backgroundColor:'blue'
  },
});
