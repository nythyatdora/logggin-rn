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

class RegisterScreenMain extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            errorUsername: {
                status: false,
            },

            errorPassword: {
                status: false,
            }
        };

        this.usernameInputRef = React.createRef();
        this.passwordInputRef = React.createRef();
    }

    registerNewAccount = () => {
        let username = this.usernameInputRef.current.state.value;
        let password = this.passwordInputRef.current.state.value;

        let allowedUsername = this.testUsername(username);
        let allowedPassword = this.testPassword(password);

        if (allowedUsername && allowedPassword) {
            this.props.navigation.navigate('Home', {
                username: username,
            });
        }

        !allowedUsername ? this.toggleUsernameWarning(true) : this.toggleUsernameWarning(false);

        !allowedPassword ? this.togglePasswrodWarning(true) : this.togglePasswrodWarning(false);
    }

    testUsername(username) {
        let regexForUsername = /^(?=.{5,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+$/;
        return regexForUsername.test(username);
    }

    testPassword(password) {
        let regexForPassword = /[a-zA-Z0-9]{5,}$/;
        return regexForPassword.test(password);
    }

    toggleUsernameWarning(status) {
        this.setState({
            errorUsername: {
                status: status,
            }
        })
    }

    togglePasswrodWarning(status) {
        this.setState({
            errorPassword: {
                status: status,
            }
        })
    }

    render() {
        return (
            <KeyboardAvoidingView style={main.__wrapper}>
                <View style={main.__login_screen}>
                    <View style={main.__login_screen$form}>
                        <Text style={{ fontSize: 42, fontWeight: 'bold', marginBottom: 12, }}>New User</Text>

                        {this.state.errorUsername.status ?
                            <Text style={[{ marginBottom: 8, fontWeight: 'bold', color: 'red' }]}>invalid</Text>
                            : null
                        }

                        <TextInput
                            ref={this.usernameInputRef}
                            mode='flat'
                            label='Username'
                            placeholder='New Username'
                            style={{ marginBottom: 12 }}
                        />

                        {this.state.errorPassword.status ?
                            <Text style={[{ marginBottom: 8, fontWeight: 'bold', color: 'red' }]}>invalid</Text>
                            : null
                        }

                        <TextInput
                            ref={this.passwordInputRef}
                            mode='flat'
                            label='Password'
                            secureTextEntry
                        />

                        <Picker
                            style={{ height: 50, width: 100, marginTop: 12, }}>
                            <Picker.Item label="BTB" value="0" />
                            <Picker.Item label="SR" value="1" />
                        </Picker>

                        <Button
                            color='black'
                            style={[main.__margin_top$12, main.__background$lightgray]}
                            onPress={this.registerNewAccount}
                        >REGGGISTER 'ME' UP</Button>
                    </View>

                    <View style={main.__login_screen$register}>
                        <Text style={{ color: 'gray', fontWeight: 'bold' }}>already have</Text>
                        <TouchableOpacity onPress={
                            () => this.props.navigation.navigate('Login')
                        }>
                            <Text style={{ color: 'black', fontWeight: 'bold', marginLeft: 4, }}>account</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
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
            <RegisterScreenMain {...this.props}/>
        </>);
    }
}