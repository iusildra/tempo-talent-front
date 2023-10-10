import { StyleSheet, Image } from "react-native";
import DatePicker from "react-datepicker";
import { Text, View } from "../../components/Themed";
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from "react";
import { TextInput, Button } from "react-native-paper";
import './style.css'
export default function Home(props: { name: string | (() => string); surname: string | (() => string); phoneNumber: string | (() => string); mail: string | (() => string); abonnement: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; dureeabonnement: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) {
  const [name, setName] = useState<string>(props.name || "");
  const [surname, setSurname] = useState<string>(props.surname || "");
  const [phoneNumber, setPhonenumber] = useState<string>(props.phoneNumber|| "");
  const [mail, setMail] = useState<string>(props.mail|| "");

  

  return (
    <View style={styles.container}>
      
      
      
      
      

      
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
      <Text>{props.abonnement}</Text>
      <Text>{props.dureeabonnement}</Text>
      <Button
        className="button"
        mode="contained"
        style={styles.button}
        onPress={() => console.log("Pressed")}
      >
        Offres passées
      </Button>
      <div className="buttoncontainer"><Button
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
      </Button></div>
      
      
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
