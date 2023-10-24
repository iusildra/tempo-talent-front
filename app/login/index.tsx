import { StyleSheet, Image } from "react-native";

import { Text, View } from "../../components/Themed";
import { SetStateAction, useState } from "react";
import { TextInput, Button } from "react-native-paper";
import { Link, Stack } from 'expo-router';

export default function Login() {
  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");
  

  const connexion=()=>{
    console.log(loginEmail+loginPassword)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title1}>Login</Text>

      <TextInput
        label="Email"
        value={loginEmail}
        onChangeText={setLoginEmail}
        mode="outlined"
        
      />
      
      <TextInput
        label="Mot de passe"
        value={loginPassword}
        onChangeText={setLoginPassword}
        mode="outlined"
        
      />
      
      
      
      <Button
        
        mode="contained"
        style={styles.button}
        onPress={() => connexion()}
      >
        Connexion
      </Button>
    <Text>Vous n'êtes pas encore inscrit ? Inscrivez-vous <Link href="/createaccount" style={styles.link}>ici</Link></Text>  
    </View>
  );
}

const styles = StyleSheet.create({
  link: {
    marginTop: 15,
    paddingVertical: 15,
    fontSize: 14,
    color: '#2e78b7',
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
