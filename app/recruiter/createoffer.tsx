import { StyleSheet, Image } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text, View } from "../../components/Themed";
import { SetStateAction, useState } from "react";
import { TextInput, Button } from "react-native-paper";

export default function Home(props: { etablissement: string; }) {
  const [offerName, setOfferName] = useState<string>("");
  const [offerDescription, setOfferDescription] = useState<string>("");
  const [offerSalary, setOfferSalary] = useState<string>("");
  
  const [selectedStartingDate, setSelectedStartingDate] = useState(new Date());
  const [selectedEndingDate, setSelectedEndingDate] = useState(new Date());
  const [datePickerVisibleStarting, setStartingDatePickerVisible] = useState(false);
  const [datePickerVisibleEnding, setEndingDatePickerVisible] = useState(false);

  const creationOffer=()=>{
    if(offerName == "" || offerDescription == "" || offerSalary==""){
      alert("Veuillez remplir toutes les informations")
    }
    else if(selectedStartingDate>selectedEndingDate){
      alert("Vous ne pouvez pas finir avant d'avoir commencé")
    }
    else{
      console.log(offerName+offerDescription+offerSalary+selectedStartingDate+selectedEndingDate+props.etablissement)
    }
  }

  const showEndingDatePicker = () => {
    setEndingDatePickerVisible(true);
  };
  const showStartingDatePicker = () => {
    setStartingDatePickerVisible(true);
  };
  
  const hideEndingDatePicker = () => {
    setEndingDatePickerVisible(false);
  };
  const hideStartingDatePicker = () => {
    setStartingDatePickerVisible(false);
  };
  const handleStartingConfirm = (_, date) => {
    
    setSelectedStartingDate(date);
    hideStartingDatePicker();
  }
  const handleEndingConfirm = (_, date) => {
    
    setSelectedEndingDate(date);
    hideEndingDatePicker();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title1}>Créer une nouvelle offre</Text>

      <TextInput
        label="Nom"
        value={offerName}
        onChangeText={setOfferName}
        mode="outlined"
        
      />
      
      <TextInput
        label="Description"
        value={offerDescription}
        onChangeText={setOfferDescription}
        mode="outlined"
        
      />
      
      <TextInput
        label="Salaire"
        value={offerSalary}
        onChangeText={setOfferSalary}
        mode="outlined"
        
      />
      
      {selectedStartingDate ? <Text>{selectedStartingDate.toLocaleDateString()}</Text> : <Text>No starting date chosen</Text>}
      <Button  onPress={showStartingDatePicker} style={styles.button} >Choose starting date</Button>
      {datePickerVisibleStarting ? (<DateTimePicker
          value={selectedStartingDate}
          
          mode="date"
          onChange={handleStartingConfirm}
          
        />):null}


{selectedEndingDate ? <Text>{selectedEndingDate.toLocaleDateString()}</Text> : <Text>No ending date chosen</Text>}
      <Button  onPress={showEndingDatePicker} style={styles.button} >Choose ending date</Button>
      {datePickerVisibleEnding ? (<DateTimePicker
          value={selectedEndingDate}
          
          mode="date"
          onChange={handleEndingConfirm}
          
        />):null}
      
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
