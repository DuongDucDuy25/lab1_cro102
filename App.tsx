
import React from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import Banner from './componentss/Banner';
import Block from './componentss/ComContainer/Block';
import Button from './componentss/ComContainer/Button';
import TextInput from './componentss/ComContainer/TextInput';
import { ThemeProvider, useTheme } from './componentss/ComContainer/Theme';

const App = () => {
    const toggleTheme = useTheme();
    const themeStyle = useTheme();

  return (
      <ThemeProvider>
        <SafeAreaView style = {[themeStyle]}>
        <Banner uri_img="https://i.pinimg.com/236x/0c/94/f1/0c94f15fc457d9bdbc76240c13dd9edc.jpg" />
        <Block title='Block 1'>
          <Text >Đây là block 1</Text> 
        </Block>
        <TextInput placeholder="Enter your email" />
        <Button title="Submit" onPress={toggleTheme} />
      </SafeAreaView>
      </ThemeProvider>
      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
