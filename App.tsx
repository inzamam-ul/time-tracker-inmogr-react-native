/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import styled from 'styled-components/native';
import TrackerContainer from './components/TrackerContainer';

const StyledScrollView = styled.View`
  background-color: #2da771;
  padding: 8px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledText = styled.Text`
  text-align: center;
  font-family: 'Pacifico-Regular';
  font-weight: 400;
  font-size: 20px;
  color: #ffffff;
  margin: 10px 0px;
`;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: '#2DA771',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        // backgroundColor={backgroundStyle.backgroundColor}
      />
      <StyledScrollView>
        <StyledText>Time Tracker</StyledText>
        <TrackerContainer />
      </StyledScrollView>
    </SafeAreaView>
  );
}

export default App;
