import {
  Text,
  Container,
  Content,
  Header,
  Body,
  Card,
  H1,
  H3,
  Button,
  Title,
} from 'native-base';
import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Icons from './components/Icons';

const itemArray = new Array(9).fill('empty');

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState('Win');

  const changeItem = (itemNumber) => {};
  const reloadGame = () => {
    setIsCross(false);
    setWinMessage('');
    itemArray.fill('empty', 0, 9);
  };
  const checkIsWinner = () => {};

  return (
    <Container style={{backgroundColor: '#333945', padding: 5}}>
      <Header>
        <Body>
          <Title>TicTacToe</Title>
        </Body>
      </Header>
      <Content>
        <View style={styles.grid}>
          {itemArray.map((item, index) => (
            <TouchableOpacity
              style={styles.box}
              key={index}
              onPress={() => changeItem(index)}>
              <Card style={styles.card}>
                <Icons name={item} />
              </Card>
            </TouchableOpacity>
          ))}
        </View>
        {winMessage ? (
          <View>
            <H1 style={styles.winMessage}>{winMessage}</H1>
            <Button onPress={reloadGame} primary block rounded>
              <Text>Reload Game</Text>
            </Button>
          </View>
        ) : (
          <H3 style={styles.message}>{isCross ? 'Cross' : 'Circle'} Turns</H3>
        )}
      </Content>
    </Container>
  );
};

export default App;

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  box: {
    width: '33%',
    marginBottom: 6,
  },
  card: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#FFF',
    marginTop: 20,
    backgroundColor: '#4652B3',
    paddingVertical: 10,
    marginVertical: 10,
  },
});
