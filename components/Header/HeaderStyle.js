import React from 'react';
import {
    StyleSheet,
    Dimensions,
} from 'react-native';

export default HeaderStyle = StyleSheet.create({
    __wrapper: {
        width: Dimensions.get('screen').width,
        height: 68,

        backgroundColor: 'white',

        flexDirection: 'row',
        elevation: 5,
    },

    __left: {
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',
    },

    __center: {
        flex: 4,

        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    __right: {
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',
    },

    __title: {
        fontSize: 28,
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
    },

    __button_icon: {
        width: 40,
        height: 40,
        borderRadius: 100,

        justifyContent: 'center'
    },

    __button_default: {
        backgroundColor: 'lightgray',
    }
});