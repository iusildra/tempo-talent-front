import * as React from "react";
import { Avatar, Card, Text } from "react-native-paper";
import { StyleSheet } from "react-native";

export interface CardProps {
  header: string;
  subheader?: string;
  img?: string;
  content?: string;
  actions?: React.JSX.Element;
}

const LeftContent = (props: { size: number }) => (
  <Avatar.Icon size={props.size} icon="folder" />
);

const CustomCard: React.FC<CardProps> = ({
  header,
  subheader,
  img,
  content,
  actions,
}) => (
  <Card style={cardStyles.card}>
    <Card.Title title={header} subtitle={subheader} left={LeftContent} />
    <Card.Content>
      <Text variant="bodyMedium">{content}</Text>
    </Card.Content>
    {img && <Card.Cover source={{ uri: img }} />}
    {actions}
  </Card>
);

const cardStyles = StyleSheet.create({
  card: {
    marginVertical: 10,
  },
});

export default CustomCard;
