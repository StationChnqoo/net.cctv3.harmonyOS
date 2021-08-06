/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
} from 'react-native';

import {Button, TabNavigator, x, Closure, TabBar, CheckBox} from '../../test';
import {useState} from 'react';
import {CheckBoxsSkin} from '../../test/src/component/CheckBox';

const TestCheckBox = () => {
  const loadCheckBox = (skin: CheckBoxsSkin, status: boolean) => {
    return (
      <CheckBox onStatusChange={status => {}} status={status} skin={skin} />
    );
  };
  const loadCheckBoxGroups = (skin: CheckBoxsSkin) => {
    return (
      <View style={styles.viewGroup}>
        {loadCheckBox(skin, false)}
        <View style={{width: 4}} />
        {loadCheckBox(skin, true)}
      </View>
    );
  };

  return (
    <View style={styles.view}>
      {loadCheckBoxGroups('onlyTrue')}
      {loadCheckBoxGroups('circleBorder')}
      {loadCheckBoxGroups('circleFill')}
      {loadCheckBoxGroups('squareBorder')}
      {loadCheckBoxGroups('squareFill')}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  viewGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
  },
});

export default TestCheckBox;