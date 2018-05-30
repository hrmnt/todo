import React from 'react';
import { StackNavigator } from 'react-navigation';
import App from './App';
import Details from './Details';
import todos from '../data/data';


const Index = StackNavigator({
    Home: {
        screen:  props=> <App todos={todos} />
    },
    Detail:{
        screen: Details

    },

},{
    headerMode: 'none',

});



export default class Vixtra extends React.Component {
    render() {
        return <Index/>;
    }
}