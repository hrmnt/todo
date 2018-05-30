import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Animated
} from 'react-native';
import moment from 'moment';
import {scale, color, scaleVertical} from '../utils/util';

type Props = {};
export default class Details extends Component<Props> {
    constructor(props) {
        super(props);


    }

    componentWillMount() {
        let date = moment().format('dddd, DD MMMM');
        this.setState({
            date: date,

        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Detail</Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },


});
