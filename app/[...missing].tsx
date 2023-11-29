import { Link, Stack } from 'expo-router';

import { Text, View } from '../components/Themed';
import styles from '../styles/styles';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={styles.container}>
        <Text style={styles.title2}>This screen doesn't exist.</Text>

        <Link href="/recruiter" style={styles.link}>
          <Text style={styles.linkText}>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
