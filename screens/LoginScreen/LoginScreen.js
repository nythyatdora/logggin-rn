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

import {
    TextInput,
    Button,
} from 'react-native-paper';


import header from '../../components/Header/HeaderStyle';

function HeaderLeft(props) {
    return (
        <TouchableOpacity
            style={[header.__button_default, header.__button_icon]}
            onPress={() => props.navigation.goBack()}
        >
            <Icon
                type='ionicon'
                name='ios-arrow-back'
                color='black'
            />
        </TouchableOpacity>
    );
}

const headerTitle = 'Looogin';

const headerRight = <>
</>;

function LoginScreenHeader(props) {
    return (
        <Header
            titleHeader={headerTitle}
            headerLeft={<HeaderLeft {...props} />}
            headerRight={headerRight}
        />  
    );
}

function LoginScreenMain() {
    return (
        <KeyboardAvoidingView style={main.__wrapper}>
            <View style={main.__login_screen}>
                <View style={main.__login_screen$form}>
                    <TextInput
                        mode='flat'
                        label='Username'
                    />

                    <TextInput
                        mode='flat'
                        label='Password'
                        secureTextEntry
                        style={main.__margin_top$12}
                    />

                    <Button color='black' style={[main.__margin_top$12, main.__background$lightgray]}>LOGGG 'ME' IN</Button>
                </View>

                <View style={main.__login_screen$register}>
                    <Text style={{ color: 'gray', fontWeight: 'bold' }}>haven't</Text>
                    <TouchableOpacity>
                        <Text style={{ color: 'black', fontWeight: 'bold', marginLeft: 4, }}>register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

export default class LoginScreenContainer extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Login',
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <LoginScreenHeader {...this.props} />
                <LoginScreenMain />
            </>
        );
    }
} 