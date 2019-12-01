import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StatusBar
} from 'react-native';

import {
    Icon,
} from 'react-native-elements';

import header from './HeaderStyle';

export default function Header(props) {
    let { titleHeader, headerLeft, headerRight } = props;

    return (<>
        <View style={header.__wrapper}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />

            <View style={header.__left}>
                {headerLeft}
            </View>

            <View style={header.__center}>
                <Text style={header.__title}>{titleHeader}</Text>
            </View>

            <View style={header.__right}>
                {headerRight}
            </View>
        </View>
    </>);
}
