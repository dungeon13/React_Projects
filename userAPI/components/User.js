import {Card, CardItem, H1, Text, View} from 'native-base';
import React from 'react';
import {StyleSheet, Image} from 'react-native';
import moment from 'moment';

const User = ({data}) => {
  return (
    <Card style={styles.card}>
      <CardItem cardBody style={styles.cardItem}>
        <Image
          source={{
            uri: data.picture?.large,
            width: 150,
            height: 250,
          }}
          style={styles.image}
        />
      </CardItem>
      <CardItem style={styles.cardItem}>
        <H1 style={styles.text}>
          {data.name?.title} {data.name?.first} {data.name?.last}
        </H1>
      </CardItem>
      <CardItem bordered style={styles.cardItem}>
        <Text style={styles.text}>{data.cell}</Text>
      </CardItem>
      <CardItem footer style={styles.cardItem}>
        <Text style={{color: '#FFF'}}>
          Registered at {moment(data.registered?.date).format('DD-MM-YY')}
        </Text>
      </CardItem>
    </Card>
  );
};

export default User;

const styles = StyleSheet.create({
  card: {
    width: '90%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#4f8a8b',
    borderColor: '#4f8a8b',
    borderWidth: 2,
  },
  cardItem: {
    backgroundColor: '#4f8a8b',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#fbd46d',
    marginTop: -50,
  },
  text: {
    color: '#eeeeee',
  },
});
