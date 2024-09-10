import React from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';

const App = () => {
  const screenWidth = Dimensions.get('window').width;
  const imageWidth = screenWidth * 0.8;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/hinh-dep-5.jpg' }}
        style={{ width: imageWidth, height: imageWidth * 0.6 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default App;
