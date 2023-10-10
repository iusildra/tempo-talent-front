import { StyleSheet, Image } from "react-native";
import DatePicker from "react-datepicker";
import { Text, View } from "../../components/Themed";
import { useState } from "react";
import { TextInput, Button } from "react-native-paper";

export default function Home() {
  const [offerName, setOfferName] = useState<string>("");
  const [offerDescription, setOfferDescription] = useState<string>("");
  const [offerSalary, setOfferSalary] = useState<string>("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const startDateHandler = (event) => {
    console.log("event",event);
    const gettodate = setStartDate(event);
    
  };
  const endDateHandler = (event) => {
    console.log("event",event);
    const gettodate = setEndDate(event);
    
  };

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
      <DatePicker selected={startDate} onChange={startDateHandler} showTimeSelect
    timeFormat="HH:mm"
    timeIntervals={15}
    dateFormat="dd/MM/yyyy HH:mm:ss" />
      <DatePicker selected={endDate} onChange={endDateHandler} showTimeSelect
    timeFormat="HH:mm"
    timeIntervals={15}
    dateFormat="dd/MM/yyyy HH:mm:ss" />
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
