/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';

import {RNCamera} from 'react-native-camera';

const PendingView = () => (
  <View style={styles.pending}>
    <Text style={styles.pendingText}>Loading...</Text>
  </View>
);

const App = () => {
  const [image, setImage] = useState(null);
  const takePicture = async (camera) => {
    try {
      const options = {quality: 0.9, base64: false};
      const data = await camera.takePictureAsync(options);
      setImage(data.uri);
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <View style={styles.conatiner}>
      {image ? (
        <View style={styles.preview}>
          <Text style={styles.camtext}>Here is your pic</Text>
          <Image
            style={styles.clicked}
            source={{uri: image, width: '100%', height: '80%'}}
          />
          <Button
            title="Click new Image"
            onPress={() => {
              setImage(null);
            }}></Button>
        </View>
      ) : (
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          captureAudio={false}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'This is the message on why',
            buttonPositive: 'Allow',
            buttonNegative: 'Deny',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio',
            message: 'This is the message on why',
            buttonPositive: 'Allow',
            buttonNegative: 'Deny',
          }}>
          {({camera, status}) => {
            if (status !== 'READY') {
              return <PendingView />;
            }
            return (
              <View
                style={{
                  flex: 0,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  style={styles.capture}
                  onPress={() => takePicture(camera)}>
                  <Text>Snap</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </RNCamera>
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#0A79DF',
  },
  preview: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  pending: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pendingText: {
    fontSize: 30,
    color: 'red',
  },
  capture: {
    flex: 0,
    backgroundColor: 'orange',
    padding: 20,
    alignSelf: 'center',
  },
  camtext: {
    backgroundColor: '#3498DB',
    color: '#FFF',
    marginBottom: 10,
    width: '100%',
    textAlign: 'center',
    paddingVertical: 20,
    fontSize: 25,
  },
  clicked: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
});
