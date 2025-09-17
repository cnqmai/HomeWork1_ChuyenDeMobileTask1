import { View, Text, StyleSheet } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';

const Profile = () => {
  const { message } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Profile' }} />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 9/10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 25,
    textAlign: 'left',
    color: '#a5a5a5ff',
  },
});

export default Profile;