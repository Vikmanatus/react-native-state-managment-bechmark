/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {BENCHMARK_MODE} from '@env';
import {BenmarchModes} from './src/types/benchmark';
import {ApolloOnly} from './src/ApolloOnly/App';

let ExportedApp: () => React.JSX.Element;

if (BENCHMARK_MODE === BenmarchModes.APOLLO_ONLY) {
  ExportedApp = ApolloOnly;
} else {
  ExportedApp = App;
}
function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>Fallback App</Text>
    </SafeAreaView>
  );
}

export default ExportedApp;
