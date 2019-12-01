import {
    StyleSheet,
    Dimensions,
} from 'react-native';

export default MainStyle = StyleSheet.create({
    __wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: 'white',
    },

    __image_fit: {
        width: 180,
        height: 180,
    },

    __welcome_text: {
        fontSize: 28,
        fontWeight: 'bold',
    },

    __login_screen: {
        width: Dimensions.get('screen').width,

        flex: 1,
    },

    __login_screen$form: {
        padding: 40,
        flex: 1,
        justifyContent: 'center',

        backgroundColor: 'white',
    },

    __margin_top$12: {
        marginTop: 12,
    },

    __login_screen$register: {
        flex: .1,

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    __background$lightgray: {
        backgroundColor: 'lightgray',
    }
});