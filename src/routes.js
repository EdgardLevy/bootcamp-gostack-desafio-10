import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Sign from './pages/SignIn';
import CheckIns from './pages/CheckIns';
import SelectProvider from './pages/New/SelectProvider';
import SelectDateTime from './pages/New/SelectDateTime';
import Confirm from './pages/New/Confirm';

import HelpOrderList from './pages/HelpOrders/List';
import NewHelpOrder from './pages/HelpOrders/New';

import LogoTitle from '~/components/LogoTitle';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign,
        App: createBottomTabNavigator(
          {
            CheckIn: {
              screen: createStackNavigator(
                {CheckIns},
                {
                  headerLayoutPreset: 'center',
                  defaultNavigationOptions: {
                    headerTitle: () => <LogoTitle />,
                  },
                  navigationOptions: {
                    tabBarLabel: 'Check-ins',
                    tabBarIcon: ({tintColor}) => (
                      <Icon name="edit-location" size={20} color={tintColor} />
                    ),
                  },
                }
              ),
            },
            HelpOrder: {
              screen: createStackNavigator(
                {
                  HelpOrderList,
                  NewHelpOrder,
                },
                {
                  headerLayoutPreset: 'center',
                  defaultNavigationOptions: {
                    headerTitle: () => <LogoTitle />,
                  },
                }
              ),
              navigationOptions: {
                tabBarLabel: 'Ask Help',
                tabBarIcon: ({tintColor}) => (
                  <Icon name="live-help" size={20} color={tintColor} />
                ),
              },
            },
            New: {
              screen: createStackNavigator(
                {
                  SelectProvider,
                  SelectDateTime,
                  Confirm,
                },
                {
                  headerLayoutPreset: 'center',
                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerTintColor: '#FFF',
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                  },
                }
              ),
              navigationOptions: {
                tabBarVisible: false,
                tabBarLabel: 'Ask Help',
                tabBarIcon: ({tintColor}) => (
                  <Icon name="live-help" size={20} color={tintColor} />
                ),
              },
            },
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#ee4d64',
              inactiveTintColor: '#999999',
              tabStyle: {
                height: 54,
                alignItems: 'center',
                justifyContent: 'center',
              },
              style: {
                backgroundColor: '#fff',
                height: 60,
              },
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
