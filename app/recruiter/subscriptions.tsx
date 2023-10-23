import React from "react";
import { View } from "react-native";
import { CardProps } from "../../components/Card";
import CardView, { CardViewProps } from "../../components/CardView";
import { set } from "lodash";

interface Subscription {
  id: number;
  name: string;
  advantages: string[];
  weeklyCost: number;
  monthlyCost: number;
  yearlyCost: number;
}

interface Props {
  subscriptions: Subscription[];
}

const Subscriptions: React.FC<Props> = () => {
  const [subscriptions, setSubscriptions] = React.useState<
    (CardProps & { id: string | number })[]
  >([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const response: Subscription[] = await fetch("").then((res) =>
        res.json()
      ); // TODO add endpoint
      const subData = response.map((sub) => ({
        id: sub.id,
        header: sub.name,
        content:
          sub.advantages.join(", ") +
          "\n" +
          sub.weeklyCost +
          "\n" +
          sub.monthlyCost +
          "\n" +
          sub.yearlyCost,
      }));
      setSubscriptions(subData);
    };
    setSubscriptions(data.data);
  }, []);
  return (
    <View>
      <CardView data={subscriptions} />
    </View>
  );
};

export default Subscriptions;

const data: CardViewProps = {
  data: [
    {
      id: 1,
      header: "Free",
      content: "Card Subtitle",
    },
    {
      id: 2,
      header: "Silver",
      content: "Card Subtitle",
    },
    {
      id: 3,
      header: "Premium",
      content: "Card Subtitle",
    },
    {
      id: 4,
      header: "Unlimited",
      content: "Card Subtitle",
    },
  ],
};
