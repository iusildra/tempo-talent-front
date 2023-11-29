import { View } from "../../components/Themed";
import React from "react";
import CardView, { CardViewProps } from "../../components/CardView";
import styles from "../../styles/styles";
import CompanySearch from "../../components/CompanySearch";
import Separator from "../../components/Separator";

export default function Companies() {
  const [companies, setCompanies] = React.useState<CardViewProps>({ data: [] });

  React.useEffect(() => {
    setCompanies(comps);
  }, []);

  const fetchCompanies = async (keywords: string, location: string) => {
    const body: SearchCompaniesDTO = {
      keywords: keywords,
      location: location,
    }
    const response = await fetch("", { body: JSON.stringify(body) }).then((res) => res.json()); // TODO add endpoint
    setCompanies(response.json());
  };

  return (
    <View style={styles.container}>
      <CompanySearch search={fetchCompanies} />
      <Separator />
      <CardView data={companies.data} />
    </View>
  );
}

const comps: CardViewProps = {
  data: [
    {
      id: 1,
      header: "Card Title",
      subheader: "Card Subtitle",
      content: "Card Subtitle",
      img: "https://picsum.photos/700",
      actions: undefined,
    },
    {
      id: 2,
      header: "Card Title",
      subheader: "Card Subtitle",
      content: "Card Subtitle",
      img: "https://picsum.photos/700",
      actions: undefined,
    },
    {
      id: 3,
      header: "Card Title",
      subheader: "Card Subtitle",
      content: "Card Subtitle",
      img: "https://picsum.photos/700",
      actions: undefined,
    },
    {
      id: 4,
      header: "Card Title",
      subheader: "Card Subtitle",
      content: "Card Subtitle",
      img: "https://picsum.photos/700",
      actions: undefined,
    },
    {
      id: 5,
      header: "Card Title",
      subheader: "Card Subtitle",
      content: "Card Subtitle",
      img: "https://picsum.photos/700",
      actions: undefined,
    },
  ],
};
