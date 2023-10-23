import { Image } from "react-native";
import { Text, View } from "../../components/Themed";
import styles from "../../styles/styles";
import CompanySearch from "../../components/CompanySearch";
import Separator from "../../components/Separator";
import { router } from "expo-router";

export default function Home() {
  const firstName = "John";
  const lastName = "Doe";

  const fetchCompanies = async (keywords: string, location: string) => {
    const body: SearchCompaniesDTO & Record<string, string> = {
      keywords: keywords,
      location: location,
    };
    router.replace("/recruiter/companies");
    router.setParams(body);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title1}>Temporary job search</Text>
      <Image
        source={{
          uri: "https://media.licdn.com/dms/image/D4E03AQHbr1KbFhG1cQ/profile-displayphoto-shrink_800_800/0/1665162341640?e=1701302400&v=beta&t=DdcjuKNnoH1hb78nJP_RTIcPArBUlL4qclh-7LOn-kE",
        }}
        style={styles.homePicture}
      />
      <Text style={styles.title2} cy-data="">
        {firstName} {lastName}
      </Text>

      <Separator />

      <CompanySearch search={fetchCompanies}/>
    </View>
  );
}