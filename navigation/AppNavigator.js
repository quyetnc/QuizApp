import React from 'react';
import {createAppContainer} from 'react-navigation';
import MainNavigator from './MainNavigator';

const containerMain = createAppContainer (MainNavigator);
export default containerMain;