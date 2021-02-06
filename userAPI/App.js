import React, {useEffect, useState} from 'react';
import {Text, Button, View} from 'native-base';
import Axios from 'axios';
import {StyleSheet} from 'react-native';
import User from './components/User';

const URL = `https://randomuser.me/api/`;

const App = () => {
  const [details, setDetails] = useState(null);
  const fetchDetails = async () => {
    try {
      const {data} = await Axios.get(URL);
      const details = data.results[0];
      setDetails(details);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  if (!details) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View>
        <User data={details} />
        <Button rounded style={styles.button} onPress={() => fetchDetails()}>
          <Text>New User</Text>
        </Button>
      </View>
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222831',
  },
  button: {
    marginTop: 30,
    paddingHorizontal: 30,
  },
});
