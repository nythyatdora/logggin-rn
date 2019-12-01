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

const headerTitle = 'Regggister';

const headerRight = <>
</>;

function RegisterScreenHeader(props) {
    return (
        <Header
            titleHeader={headerTitle}
            headerLeft={<HeaderLeft {...props} />}
            headerRight={headerRight}
        />
    );
}

function RegisterScreenMain() {
    return (
        <KeyboardAvoidingView style={main.__wrapper}>
            <View style={main.__login_screen}>
                <View style={main.__login_screen$form}>
                    <Text style={{ fontSize: 42, fontWeight: 'bold' }}>New User</Text>
                    <TextInput
                        mode='flat'
                        label='Username'
                        placeholder='New Username'
                        style={main.__margin_top$12}
                    />

                    <TextInput
                        mode='flat'
                        label='Password'
                        secureTextEntry
                        style={main.__margin_top$12}
                    />

                    <Picker
                        style={{ height: 50, width: 100, marginTop: 12, }}>
                        <Picker.Item label="BTB" value="0" />
                        <Picker.Item label="SR" value="1" />
                    </Picker>

                    <Button color='black' style={[main.__margin_top$12, main.__background$lightgray]}>REGGGISTER 'ME' UP</Button>
                </View>

                <View style={main.__login_screen$register}>
                    <Text style={{ color: 'gray', fontWeight: 'bold' }}>already have</Text>
                    <TouchableOpacity>
                        <Text style={{ color: 'black', fontWeight: 'bold', marginLeft: 4, }}>account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}
export default class RegisterScreenContainer extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Register',
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (<>
            <RegisterScreenHeader {...this.props} />
            <RegisterScreenMain />
        </>);
    }
}