import { View } from "./Themed";
import styles from "../styles/styles";

export default function Separator() {
  return (
    <View
      style={styles.separator}
      lightColor="#eee"
      darkColor="rgba(255,255,255,0.1)"
    />
  );
}
