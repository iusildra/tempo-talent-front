import { StyleSheet, Image } from "react-native";

import { Text, View } from "../../components/Themed";
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from "react";
import { TextInput, Button } from "react-native-paper";

export default function Home(props: { name: string | (() => string); surname: string | (() => string); phoneNumber: string | (() => string); mail: string | (() => string); abonnement: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; dureeabonnement: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) {
  const [name, setName] = useState<string>(props.name || "Dino");
  const [surname, setSurname] = useState<string>(props.surname || "Greil");
  const [phoneNumber, setPhonenumber] = useState<string>(props.phoneNumber|| "0647896506");
  const [mail, setMail] = useState<string>(props.mail|| "dino.greil@etu.umontpellier.fr");

  

  return (
    <View >
      
      
      
      
      

      
      <TextInput
        label="Nom"
        value={surname}
        onChangeText={setSurname}
        mode="outlined"
        
      />
      <TextInput
        label="Prénom"
        value={name}
        onChangeText={setName}
        mode="outlined"
        
      />
      
      <TextInput
        label="Téléphone"
        value={phoneNumber}
        onChangeText={setPhonenumber}
        mode="outlined"
        
      />
      <TextInput
        label="Email"
        value={mail}
        onChangeText={setMail}
        mode="outlined"
        
      />
      <View style={styles.subscription}><Text>{props.abonnement || "Abonnement Gold"}</Text>
      <Text>{props.dureeabonnement  || "2 mois"}</Text></View>
      
      <Button
        className="button"
        mode="contained"
        style={styles.button}
        onPress={() => console.log("Pressed")}
      >
        Offres passées
      </Button>
      <View style={styles.buttoncontainer}><Button
        className="button"
        mode="contained"
        style={styles.button}
        onPress={() => console.log("Pressed")}
      >
        Modifier
      </Button>
      <Button
        className="button"
        mode="contained"
        style={styles.button}
        onPress={() => console.log("Pressed")}
      >
        Supprimer
      </Button></View>
        
      
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  buttoncontainer:{
    display: "flex",
    marginTop: 24,
    marginBottom: 24,
  },
  subscription:{
    marginTop: 24,
    marginBottom: 24,
    alignItems: "center",
    justifyContent: "center",
  },
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
