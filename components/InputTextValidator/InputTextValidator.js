import React, { Component } from 'react';
import {
    TextInput
} from 'react-native-paper';

function withValidator(TextInputComponenet, data, [type]) {
    return class extends Component {
        constructor(props) {
            super(props);

            this.state = {

            };
        }

        render() {
            return (<>
                <TextInputComponenet
                    
                />
            </>);
        }
    };
}
