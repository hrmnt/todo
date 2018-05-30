import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Animated
} from 'react-native';
import {observer} from 'mobx-react';
import moment from 'moment';
import {scale, color, scaleVertical} from '../utils/util';

@observer
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: null,
        };
        console.log(props)

    }
    removeItem = (id) => {
        this.props.todos.removeItem(id);
    }
    addItem = (item)=>{
        this.props.todos.addItem(item);
    }

    componentWillMount() {
        let date = moment().format('dddd, DD MMMM');
        this.setState({
            date: date,

        })
        this.right=[
            <TouchableOpacity style={styles.swipeBtn}><Text>Accept</Text></TouchableOpacity>,
        ]
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.dateTime}>{this.state.date}</Text>

                </View>
                <View style={styles.infoBox}>
                    <View style={styles.selectBox}>
                        <TouchableOpacity style={[styles.btn, styles.btnLeft]}>
                            <Text style={[styles.btnText, styles.montserrat]}>ALL</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.btn, styles.btnRight]}>
                            <Text style={[styles.btnText, styles.montserrat]}>MAIN</Text>

                        </TouchableOpacity>

                    </View>
                    <View style={styles.categoryBox}>
                        <View style={styles.waveWrap}>
                            <View style={[styles.counter, styles.c_1]}>

                                <Text style={<styles className="counterText"></styles>}>5</Text>

                            </View>
                            <Animated.View style={[styles.wave, styles.f_w, {height: 50}]}></Animated.View>

                        </View>
                        <View style={styles.waveWrap}>
                            <View style={[styles.counter, styles.c_2]}>

                                <Text style={styles.counterText}>5</Text>
                            </View>

                            <Animated.View style={[styles.wave, styles.s_w, {height: 50}]}></Animated.View>

                        </View>
                        <View style={styles.waveWrap}>
                            <View style={[styles.counter, styles.c_3]}>
                                <Text style={styles.counterText}>5</Text>

                            </View>

                            <Animated.View style={[styles.wave, styles.t_w, {height: 50}]}></Animated.View>

                        </View>
                    </View>
                </View>

                {/*<ScrollView style={styles.taskList}>*/}
                    {/*{*/}
                        {/*store.todos.map(i => {*/}
                            {/*// return <Box  category={i.category} key={i.id} title={i.title} type={i.type}></Box>*/}
                            {/*return (*/}
                                {/*<Swipeable rightButtons={this.right}>*/}
                                    {/*<TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')} style={styles.boxContainer}>*/}

                                        {/*<View style={styles.indicator}></View>*/}
                                        {/*<Text style={styles.title}>{i.title}</Text>*/}
                                    {/*</TouchableOpacity>*/}
                                {/*</Swipeable>*/}
                            {/*)*/}
                        {/*})*/}
                    {/*}*/}
                {/*</ScrollView>*/}
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    montserrat: {
        fontFamily: 'Montserrat-Regular'
    },
    header: {
        height: scaleVertical(100),
        backgroundColor: color.second,
        alignItems: 'center',
        justifyContent: 'center',

    },
    dateTime: {
        fontFamily: 'Montserrat',
        fontSize: scale(15),
        fontWeight: '400',
        letterSpacing: 1,
        color: color.textSecond,
    },
    infoBox: {
        height:scaleVertical(220),
        backgroundColor: color.second,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    selectBox: {
        width: '76%',
        marginBottom: scaleVertical(50),
        flexDirection: 'row',
    },
    btn: {
        flex: 1,
        paddingTop:scaleVertical(10),
        paddingBottom:scaleVertical(10),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.6,
        borderColor: '#f1f1f1'

    },
    btnLeft: {
        borderTopLeftRadius: scale(20),
        borderBottomLeftRadius: scale(20),

    },
    btnRight: {
        borderTopRightRadius: scale(20),
        borderBottomRightRadius: scale(20),

    },
    btnText: {
        fontFamily: "Montserrat_Bold",
        color: color.textMain,
        fontSize: scale(14),
        letterSpacing: 1
    },
    waveWrap: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center'
    },
    wave: {
        width: '100%'
    },
    counter: {
        height: scaleVertical(22),
        width: scale(42),
        marginBottom: 14,
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    c_1: {
        backgroundColor: color.main,

    },
    c_2: {
        backgroundColor: color.four,
    },
    c_3:{
        backgroundColor: color.fifth,
    },
    counterText: {
        color: color.textSecond,
        fontFamily: 'Montserrat_Bold'
    },

    f_w: {
        backgroundColor: color.main
    },

    s_w: {
        backgroundColor: color.four
    },
    t_w: {
        backgroundColor: color.fifth
    },
    categoryBox: {
        flexDirection: 'row',
        flex: 1,
    },
    taskList: {
        flex: 1,
        backgroundColor: '#2C2859'
    },
    boxContainer: {
        height:scaleVertical(90),
        flexDirection:'row',
        alignItems:'center',
        backgroundColor: color.third,
        paddingLeft:scale(40),
        borderColor:'#191733',
        borderBottomWidth:0.5,
        marginBottom:0.1
    },
    indicator:{
        height:scaleVertical(14),
        width:scaleVertical(14),
        backgroundColor:color.fifth,
        borderRadius:scaleVertical(7),
        marginRight:scale(40)

    },
    title:{
        color:color.textSecond
    },
    swipeBtn:{
        backgroundColor:color.second,
        flex:1,
        justifyContent:'center',
        paddingLeft:scale(10)
    }


});
