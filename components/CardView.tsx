import { ScrollView, StyleSheet } from "react-native";

import CustomCard, { CardProps } from "./Card";
import React from "react";

export interface CardViewProps {
  data: (CardProps & { id: string | number })[];
}

const CardView: React.FC<CardViewProps> = ({ data }) => {
  return (
    <ScrollView style={cardViewStyles.cardView}>
      {data.map((card) => (
        <CustomCard
          header={card.header}
          subheader={card.subheader}
          content={card.content}
          img={card.img}
          actions={card.actions}
          key={card.id}
        />
      ))}
    </ScrollView>
  );
};

const cardViewStyles = StyleSheet.create({
  cardView: {
    // display: "flex",
    // flexDirection: "column",
    // flexWrap: "wrap",
    width: "80%"
  },
});

export default CardView;
