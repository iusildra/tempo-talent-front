import { StyleSheet, Image } from "react-native";
import * as DocumentPicker from 'expo-document-picker';
import { Text, View } from "../../components/Themed";
import { SetStateAction, useState } from "react";
import { TextInput, Button } from "react-native-paper";

export default function Home(props) {
  const [businessName, setBusinessName] = useState<string>("");
  const [businessAdress, setBusinessAdress] = useState<string>("");
  const [businessDocument,setBusinessDocument] = useState<string>("");
  
  const _pickDocument = async () => {

    let result = await DocumentPicker.getDocumentAsync({type:'image/*'});

    result.assets?setBusinessDocument(result.assets[0].uri):null
   
    
    }
  const creationOffer=()=>{
    if(businessName == "" || businessAdress == "" ){
      alert("Veuillez remplir toutes les informations")
    }
    
    else{
      console.log("created")
    }
  }

  

  return (
    <View style={styles.container}>
      <Text style={styles.title1}>Créer un nouvel établissement</Text>

      <TextInput
        label="Nom"
        value={businessName}
        onChangeText={setBusinessName}
        mode="outlined"
        
      />
      
      <TextInput
        label="Adresse"
        value={businessAdress}
        onChangeText={setBusinessAdress}
        mode="outlined"
        
      />
      <Image source={{uri:businessDocument}}
    width={100} height={100}/>
<Text>{businessDocument}</Text>
      <Button
mode="contained"
style={styles.button}
onPress={_pickDocument}
> Select Document</Button>

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
