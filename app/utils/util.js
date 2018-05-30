import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => width / guidelineBaseWidth * size;
const scaleVertical = size => height / guidelineBaseHeight * size;
const scaleModerate = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;

const color = {
    main: '#46CFFF',
    second:'#383473',
    third: '#2C2859',
    four:'#ffd645',
    fifth:"#F15F9B",
    textMain:'#9ea6b5',
    textSecond:'#ffffff',
    black:'#000'
};

export {scale, scaleVertical, scaleModerate, color};