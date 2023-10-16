import { StyleSheet, Image } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text, View } from "../../components/Themed";
import { SetStateAction, useState } from "react";
import { TextInput, Button } from "react-native-paper";

export default function Home() {
  const [accountName, setAccountName] = useState<string>("");
  const [accountSurname, setAccountSurname] = useState<string>("");
  const [accountPhone, setAccountPhone] = useState<string>("");
  const [accountEmail, setAccountEmail] = useState<string>("");
  const [accountPassword, setAccountPassword] = useState<string>("");
  

  const creationOffer=()=>{
    if(accountName == "" || accountSurname == ""|| accountPhone == ""|| accountEmail == ""|| accountPassword == "" ){
      alert("Veuillez remplir toutes les informations")
    }
    
    else{
      console.log("created")
    }
  }

  

  return (
    <View style={styles.container}>
      <Text style={styles.title1}>Inscription</Text>

      <TextInput
        label="Nom"
        value={accountSurname}
        onChangeText={setAccountSurname}
        mode="outlined"
        
      />
      
      <TextInput
        label="Prénom"
        value={accountName}
        onChangeText={setAccountName}
        mode="outlined"
        
      />
      <TextInput
        label="Téléphone"
        value={accountPhone}
        onChangeText={setAccountPhone}
        mode="outlined"
        
      />
      <TextInput
        label="Email"
        value={accountEmail}
        onChangeText={setAccountEmail}
        mode="outlined"
        
      />
      <TextInput
        label="Mot de passe"
        value={accountPassword}
        onChangeText={setAccountPassword}
        mode="outlined"
        
      />
      
      
      
      <Button
        
        mode="contained"
        style={styles.button}
        onPress={() => creationOffer()}
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
