import Header from '../../components/Header/Header';
import main from '../../components/Main/MainStyle';
import React from 'react';

import {
    View,
    Image,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    Picker,
} from 'react-native';

import {
    Icon
} from 'react-native-elements';

import header from '../../components/Header/HeaderStyle';

function HeaderLeft(props) {
    return (
        <TouchableOpacity
            style={[header.__button_default, header.__button_icon]}
            onPress={() => props.navigation.openDrawer()}
        >
            <Icon
                type='ionicon'
                name='ios-menu'
                color='black'
            />
        </TouchableOpacity>
    );
}

const headerTitle = 'Hooomework';

function HeaderRight(props) {
    return (
        <TouchableOpacity
            style={[header.__button_default, header.__button_icon]}
            onPress={() => props.navigation.navigate('Register')}
        >
            <Icon
                type='ionicon'
                name='ios-add'
                color='black'
            />
        </TouchableOpacity>
    );
}

function HomeScreenHeader(props) {
    return (
        <>
            <Header
                titleHeader={headerTitle}
                headerLeft={<HeaderLeft {...props} />}
                headerRight={<HeaderRight {...props} />}
            />
        </>
    );
}

function HomeScreenMain() {
    return (<>
        <View style={main.__wrapper}>
            <Image style={main.__image_fit} source={require('./img/undraw_void_3ggu.png')}></Image>
            <Text style={main.__welcome_text}>Home</Text>
            <Text>{`helllo, ${headerTitle}`}</Text>
        </View>
    </>);
}

export default class HomeScreenContainer extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <HomeScreenHeader {...this.props} />
                <HomeScreenMain />
            </>
        );
    }
}