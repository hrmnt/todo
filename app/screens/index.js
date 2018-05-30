import React from 'react';
import { StackNavigator } from 'react-navigation';
import App from './App';
import Details from './Details';
import observableListStore from '../utils/data';


const Index = StackNavigator({
    Home: {
        screen:  props=> <App todos={observableListStore} />
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